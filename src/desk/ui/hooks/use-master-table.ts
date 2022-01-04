import { useRequest } from "ahooks";
import { CommonService } from "../../service/common/common-service";
import { useEffect } from "react";

export function useMasterTable(tableName?: string) {
  const { data, run } = useRequest(() => CommonService.getMasterTable(tableName), {
    manual: true,
    cacheKey: `cache-mastertable-${tableName}`,
    staleTime: 1000 * 60 * 60, //缓存 1h
  });

  useEffect(() => {
    if (!!tableName) {
      run();
    }
  }, [tableName]);
  return { data };
}
