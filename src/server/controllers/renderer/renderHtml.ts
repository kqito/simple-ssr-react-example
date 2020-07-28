type Renderer = {
  body: string;
  script: string;
  style: string;
};

export const renderHtml = ({ body, script, style }: Renderer) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>SSR example</title>
      ${style}
    </head>
    <body>
      ${body}
      ${script}
    </body>
  </html>
  `;
};
