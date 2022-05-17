using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;

namespace ShipsTracks.Common
{
    public class ShipsSim
    {
        public static void SimData()
        {
            List<string> sqls=new List<string>();
            List<SqlParameter[]> parlist=new List<SqlParameter[]>();
            string sql = "update t_ships set lat0=lat,lat=(rand()/100+lat),lon0=lon,lon=(rand()/100+lon)";
            sqls.Add(sql);
            parlist.Add(null);

            sql = "update t_ships set lat=0 where lat>90 or lat<-90";
            sqls.Add(sql);
            parlist.Add(null);

            sql = "update t_ships set lon=0 where lon>180 or lon<-180";
            sqls.Add(sql);
            parlist.Add(null);

            SQLHelper.Instance.ExecSqlByTran(sqls, parlist);
        }
    }
}
