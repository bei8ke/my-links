export default function handler(req, res) {
  const { pathname } = new URL(req.url, `http://${req.headers.host}` );
  const slug = pathname.replace("/", "");
  
  // 这里就是您的短链接对应表，您可以随时修改
  const redirects = {
    "google": "https://www.google.com",
    "amazon": "https://www.amazon.com",
    "test": "https://www.baidu.com" 
  };

  const target = redirects[slug];
  if (target ) {
    res.writeHead(301, { Location: target });
    res.end();
  } else {
    res.status(404).send("链接不存在，请检查后缀是否正确");
  }
}
