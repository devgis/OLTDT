using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.IO;

namespace TDTLocal
{
    /// <summary>
    /// data1 的摘要说明
    /// </summary>
    public class map : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "image/png";
            //在此写入您的处理程序实现。
            string typestring = context.Request.QueryString["t"]; //MAP 矢量 ST 卫星
            string x = context.Request.QueryString["x"]; //x
            string y = context.Request.QueryString["y"]; //y
            string z = context.Request.QueryString["z"]; //z
            string filepath = string.Empty;
            if (!string.IsNullOrEmpty(typestring))
            {
                switch (typestring.ToUpper())
                {
                    //普通方式
                    case "MAP":
                        filepath = StaticData.MapPath + string.Format("\\map\\{0}\\{1}\\{2}.png", z, x, y);
                        break;
                    case "ST":
                        filepath = StaticData.MapPath + string.Format("\\st\\{0}\\{1}\\{2}.png", z, x, y);
                        break;
                }
            }
            if (File.Exists(filepath))
            {
                context.Response.WriteFile(filepath);
            }
            else
            {
                context.Response.WriteFile("~/img/noimg.png");
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}