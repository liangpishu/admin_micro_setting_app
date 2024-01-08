import { useRequest } from "ahooks";
import { CommonService } from "@service";
import { useEffect } from "react";

export function useMasterTable(tableName?: string) {
  const { data = [], refresh } = useRequest(() => CommonService.getMasterTable(tableName), {
    manual: true,
    cacheKey: `cache-mastertable-${tableName}`,
    staleTime: 1000 * 60 * 60, //缓存 1h
  });

  useEffect(() => {
    if (!!tableName) {
      refresh();
    }
  }, [tableName]);
  return { data };
}
