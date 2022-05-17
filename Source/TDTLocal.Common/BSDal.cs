using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using ShipsTracks.Common.Entites;
using System.Data.SqlClient;

namespace ShipsTracks.Common
{
    public class BSDal
    {
        public static DataTable Query(string where)
        {
            string sql = "select * from t_BS";
            if (!string.IsNullOrEmpty(where))
            {
                sql += " where " + where;
            }
            return SQLHelper.Instance.GetDataTable(sql);
        }

        public static BS Get(string id)
        {
            string sql = "select * FROM t_BS where BSID=@BSID";
            SqlParameter[] pars = new SqlParameter[] { new SqlParameter("@BSID", SqlDbType.VarChar) };
            pars[0].Value = id;
            DataTable dt = SQLHelper.Instance.GetDataTable(sql, pars);
            if (dt != null && dt.Rows.Count > 0)
            {
                BS bs = new BS();
                bs.BSID = dt.Rows[0]["BSID"] != null ? dt.Rows[0]["BSID"].ToString() : string.Empty;
                bs.BSNO = dt.Rows[0]["BSNO"] != null ? dt.Rows[0]["BSNO"].ToString() : string.Empty;
                bs.BSName = dt.Rows[0]["BSName"] != null ? dt.Rows[0]["BSName"].ToString() : string.Empty;
                bs.Contact = dt.Rows[0]["Contact"] != null ? dt.Rows[0]["Contact"].ToString() : string.Empty;
                bs.Range = dt.Rows[0]["Range"] != null ? Convert.ToSingle(dt.Rows[0]["Range"]) : 0;
                bs.Lon = dt.Rows[0]["Lon"] != null ? Convert.ToSingle(dt.Rows[0]["Lon"]) : 0;
                bs.Lat = dt.Rows[0]["Lat"] != null ? Convert.ToSingle(dt.Rows[0]["Lat"]) : 0;
                return bs;
            }
            else
            {
                return null;
            }
        }

        public static bool Add(BS bs)
        {
            if (bs == null)
            {
                return false;
            }
            string sql = "INSERT INTO t_BS(BSID,BSNO,BSName,Contact,Range,Lon,Lat)VALUES(@BSID,@BSNO,@BSName,@Contact,@Range,@Lon,@Lat)";
            SqlParameter[] pars = new SqlParameter[]{ new SqlParameter("@BSID", SqlDbType.VarChar)
                ,new SqlParameter("@BSNO", SqlDbType.VarChar)
                ,new SqlParameter("@BSName", SqlDbType.VarChar)
                ,new SqlParameter("@Contact", SqlDbType.VarChar)
                ,new SqlParameter("@Range", SqlDbType.Float)
                ,new SqlParameter("@Lon", SqlDbType.Float)
                ,new SqlParameter("@Lat", SqlDbType.Float)};
            pars[0].Value = Guid.NewGuid().ToString();
            pars[1].Value = bs.BSNO;
            pars[2].Value = bs.BSName;
            pars[3].Value = bs.Contact;
            pars[4].Value = bs.Range;
            pars[5].Value = bs.Lon;
            pars[6].Value = bs.Lat;
            return SQLHelper.Instance.ExecSql(sql, pars);
        }

        public static bool Edit(BS bs)
        {
            if (bs == null || string.IsNullOrEmpty(bs.BSID))
            {
                return false;
            }
            string sql = "UPDATE t_BS SET BSNO=@BSNO,BSName=@BSName,Contact=@Contact,Range=@Range,Lon=@Lon,Lat=@Lat where BSID=@BSID";
            SqlParameter[] pars = new SqlParameter[]{new SqlParameter("@BSID", SqlDbType.VarChar)
                ,new SqlParameter("@BSNO", SqlDbType.VarChar)
                ,new SqlParameter("@BSName", SqlDbType.VarChar)
                ,new SqlParameter("@Contact", SqlDbType.VarChar)
                ,new SqlParameter("@Range", SqlDbType.Float)
                ,new SqlParameter("@Lon", SqlDbType.Float)
                ,new SqlParameter("@Lat", SqlDbType.Float)};
            pars[0].Value = bs.BSID;
            pars[1].Value = bs.BSNO;
            pars[2].Value = bs.BSName;
            pars[3].Value = bs.Contact;
            pars[4].Value = bs.Range;
            pars[5].Value = bs.Lon;
            pars[6].Value = bs.Lat;
            return SQLHelper.Instance.ExecSql(sql, pars);
        }

        public static bool Delete(List<string> ids)
        {
            if (ids == null || ids.Count <= 0)
            {
                return false;
            }
            else
            {
                List<string> sqls = new List<string>();
                List<SqlParameter[]> parlist = new List<SqlParameter[]>();
                foreach (var id in ids)
                {
                    string sql = "DELETE FROM t_BS where BSID=@BSID";
                    SqlParameter[] pars = new SqlParameter[] { new SqlParameter("@BSID", SqlDbType.VarChar) };
                    pars[0].Value = id;

                    sqls.Add(sql);
                    parlist.Add(pars);
                }
                return SQLHelper.Instance.ExecSqlByTran(sqls, parlist);
            }
        }
    }
}
