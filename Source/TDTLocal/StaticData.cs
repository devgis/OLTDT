using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TDTLocal
{
    public class StaticData
    {
        private static string mapPath = null;
        public static string MapPath
        {
            get
            {
                if (string.IsNullOrEmpty(mapPath))
                {
                    mapPath=System.Configuration.ConfigurationManager.AppSettings["MapPath"];
                }
                return mapPath;
            }
        }
    }
}