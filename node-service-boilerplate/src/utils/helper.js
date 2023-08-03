export function sendSuccessResponse(res, data, message = 'Success') {
  res.status(200).json({
    error: false,
    message: message,
    code: 200,
    data: data,
  });
}

export function sendErrorResponse(
  res,
  error,
  message = 'Something went wrong',
  status = 400
) {
  res.status(status).json({
    error: true,
    message: message,
    code: status,
    data: null,
  });
}

export const healthCheckSuccessHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Health Check</title>
        <style>
          /* CSS styles here */
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .content {
            text-align: center;
          }

          .health {
            font-weight: bold;
            font-size: 250%;
            color: black;
          }

          .ok {
            font-weight: bold;
            font-size: 250%;
            color: green;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="content">
            <p>
              <span class="health">Health: </span>
              <span class="ok">OK</span>
            </p>
            <p class="version">Application Version: v1.0.0</p>
            <p>This is an official response from the GoParts backend service.</p>
          </div>
        </div>
      </body>
      </html>
    `;
