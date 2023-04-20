module.exports = async function (context, req) {

  if (process.env.AZURE_FUNCTIONS_ENVIRONMENT  == "Development") {

    fake = {identityProvider: "m$", 
             userDetails: "fake@user.it",
             userId: "fafafafa",
             userRoles: ["user", "anonymous", "authenticated"]
  }
      context.res= { body : {clientPrincipal: fake}}
      return;
  }

  const header = req.headers["x-ms-client-principal"];
  const encoded = Buffer.from(header, "base64");
  const decoded = encoded.toString("ascii");

    context.res = {
      body: {
        text: "authenticated api",
        clientPrincipal: JSON.parse(decoded),
        req:req
      }
    };
  };