using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Olbj.Common;

namespace Olbj
{
    /// <summary>
    /// data1 的摘要说明
    /// </summary>
    public class data : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            //在此写入您的处理程序实现。
            string typestring = context.Request.QueryString["t"];
            string json = string.Empty;
            json = JsonConvert.SerializeObject(GPSInfoDal.Query(""));
            context.Response.Write(json);
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