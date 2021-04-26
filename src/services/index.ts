// To-Do
interface Data {
  data?: [];
  error?: Error;
}

const getData = async (): Promise<Data> => {
  try {
    return { data: [] };
  } catch (error) {
    return { error };
  }
};

export default getData;