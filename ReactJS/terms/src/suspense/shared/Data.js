// export const use = (promise) => {
//   let status = "pending";
//   let result;
//   let suspender = promise.then(
//     (r) => {
//       status = "success";
//       result = r;
//     },
//     (e) => {
//       status = "error";
//       result = e;
//     }
//   );

//   return {
//     read() {
//       if (status === "pending") {
//         throw suspender;
//       } else if (status === "error") {
//         throw result;
//       } else if (status === "success") {
//         return result;
//       }
//     },
//   };
// };

export const use = (promise) => {
  let result;
  let status = "pending";
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read: () => {
      if (status === "pending") throw suspender;
      else if (status === "error") throw result;
      else if (status === "success") return result;
    },
  };
};

export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
