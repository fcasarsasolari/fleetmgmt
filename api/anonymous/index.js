module.exports = async function (context, req) {
    context.res = {
      body: {
        text: "anonymous api",
        req:req
      }
    };
  };