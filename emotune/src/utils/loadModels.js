import * as faceapi from "face-api.js";

export const loadModels = async () => {
  const modelUrl = process.env.PUBLIC_URL + "/models";

  await faceapi.nets.tinyFaceDetector.loadFromUri(modelUrl);
  await faceapi.nets.faceExpressionNet.loadFromUri(modelUrl);
};
