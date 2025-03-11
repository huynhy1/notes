import { api } from "./api";
import { bucket } from "./storage";

<<<<<<< HEAD
const region = aws.getRegionOutput().name;

export const userPool = new sst.aws.CognitoUserPool("UserPool", {
  usernames: ["email"]
=======
const region = aws.getRegionOutput();

export const userPool = new sst.aws.CognitoUserPool("UserPool", {
    usernames: ["email"]
>>>>>>> main
});

export const userPoolClient = userPool.addClient("UserPoolClient");

export const identityPool = new sst.aws.CognitoIdentityPool("IdentityPool", {
<<<<<<< HEAD
  userPools: [
    {
      userPool: userPool.id,
      client: userPoolClient.id,
    },
  ],
  permissions: {
    authenticated: [
      {
        actions: ["s3:*"],
        resources: [
          $concat(bucket.arn, "/private/${cognito-identity.amazonaws.com:sub}/*"),
        ],
      },
      {
        actions: [
          "execute-api:*",
        ],
        resources: [
          $concat(
            "arn:aws:execute-api:",
            region,
            ":",
            aws.getCallerIdentityOutput({}).accountId,
            ":",
            api.nodes.api.id,
            "/*/*/*"
          ),
        ],
      },
    ],
  },
});
=======
    userPools: [
        {
            userPool: userPool.id,
            client: userPoolClient.id,
        },
    ],
    permissions: {
        authenticated: [
            {
                actions: ["s3:*"],
                resources: [
                    $concat(bucket.arn, "/private/${cognito-identity.amazonaws.com:sub}/*"),
                ],
            },
            {
                actions: [
                  "execute-api:*",
                ],
                resources: [
                  $concat(
                    "arn:aws:execute-api:",
                    region,
                    ":",
                    aws.getCallerIdentityOutput({}).accountId,
                    ":",
                    api.nodes.api.id,
                    "/*/*/*"
                  ),
                ],
            },
        ],
    },
})
>>>>>>> main
