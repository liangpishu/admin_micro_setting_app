class MyStringUtilClass {
  isBlank(value?: string) {
    return !value;
  }

  isNotBlank(value?: string) {
    return !!value;
  }

}

const MyStringUtil = new MyStringUtilClass();
export default MyStringUtil;
