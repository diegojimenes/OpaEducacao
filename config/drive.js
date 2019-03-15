"use strict";

const Helpers = use("Helpers");
const Env = use("Env");

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default disk
  |--------------------------------------------------------------------------
  |
  | The default disk is used when you interact with the file system without
  | defining a disk name
  |
  */
  default: "s3",

  disks: {
    /*
    |--------------------------------------------------------------------------
    | Local
    |--------------------------------------------------------------------------
    |
    | Local disk interacts with the a local folder inside your application
    |
    */
    local: {
      root: Helpers.tmpPath(),
      driver: "local"
    },

    /*
    |--------------------------------------------------------------------------
    | S3
    |--------------------------------------------------------------------------
    |
    | S3 disk interacts with a bucket on aws s3
    |
    */
    s3: {
      driver: "s3",
      key: Env.get("AKIAI7CM5BQPONQXT6FA"),
      secret: Env.get("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"),
      bucket: Env.get("storage.cesva.opaeducacao"),
      region: Env.get("us-east-1")
    }
  }
};
