package nginx_conf

import (
	_ "embed"
)

//go:embed ssl.conf
var SSL []byte

//go:embed  http2https.conf
var HTTPS []byte

//go:embed  website_default.conf
var WebsiteDefault []byte

//go:embed limit.conf
var Limit []byte

//go:embed index.html
var Index []byte
