using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using ShipsTracks.Common.Entites;
using System.Data.SqlClient;

namespace ShipsTracks.Common
{
    public class ShipDal
    {
        public static DataTable Query(string where)
        {
            string sql = "select * from t_Ships";
            if (!string.IsNullOrEmpty(where))
            {
                sql += " where " + where;
            }
            return SQLHelper.Instance.GetDataTable(sql);
        }

        public static Ship Get(string id)
        {
            string sql = "select * FROM t_ships where ShipID=@ShipID";
            SqlParameter[] pars = new SqlParameter[] { new SqlParameter("@ShipID", SqlDbType.VarChar) };
            pars[0].Value = id;
            DataTable dt = SQLHelper.Instance.GetDataTable(sql, pars);
            if (dt != null && dt.Rows.Count > 0)
            {
                Ship ship = new Ship();
                ship.ShipID =dt.Rows[0]["ShipID"]!=null?dt.Rows[0]["ShipID"].ToString():string.Empty;
                ship.ShipNO = dt.Rows[0]["ShipNO"] != null ? dt.Rows[0]["ShipNO"].ToString() : string.Empty;
                ship.ShipName = dt.Rows[0]["ShipName"] != null ? dt.Rows[0]["ShipName"].ToString() : string.Empty;
                ship.Owner = dt.Rows[0]["Owner"] != null ? dt.Rows[0]["Owner"].ToString() : string.Empty;
                ship.OwnerCompany = dt.Rows[0]["OwnerCompany"] != null ? dt.Rows[0]["OwnerCompany"].ToString() : string.Empty;
                ship.Contact = dt.Rows[0]["Contact"] != null ? dt.Rows[0]["Contact"].ToString() : string.Empty;
                ship.Lon = dt.Rows[0]["Lon"] != null ?  Convert.ToSingle(dt.Rows[0]["Lon"]) : 0;
                ship.Lat = dt.Rows[0]["Lat"] != null ? Convert.ToSingle(dt.Rows[0]["Lat"]) : 0;
                return ship;
            }
            else
            {
                return null;
            }
        }

        public static bool Add(Ship ship)
        {
            if (ship == null)
            {
                return false;
            }
            string sql = "INSERT INTO t_ships(ShipID,ShipNO,ShipName,Owner,OwnerCompany ,Contact,Lon,Lat)VALUES(@ShipID,@ShipNO,@ShipName,@Owner,@OwnerCompany ,@Contact,@Lon,@Lat)";
            SqlParameter[] pars=new SqlParameter[]{ new SqlParameter("@ShipID", SqlDbType.VarChar)
                ,new SqlParameter("@ShipNO", SqlDbType.VarChar)
                ,new SqlParameter("@ShipName", SqlDbType.VarChar)
                ,new SqlParameter("@Owner", SqlDbType.VarChar)
                ,new SqlParameter("@OwnerCompany", SqlDbType.VarChar)
                ,new SqlParameter("@Contact", SqlDbType.VarChar)
                ,new SqlParameter("@Lon", SqlDbType.Float)
                ,new SqlParameter("@Lat", SqlDbType.Float)};
            pars[0].Value = Guid.NewGuid().ToString();
            pars[1].Value = ship.ShipNO;
            pars[2].Value = ship.ShipName;
            pars[3].Value = ship.Owner;
            pars[4].Value = ship.OwnerCompany;
            pars[5].Value = ship.Contact;
            pars[6].Value = ship.Lon;
            pars[7].Value = ship.Lat;
            return SQLHelper.Instance.ExecSql(sql, pars);
        }

        public static bool Edit(Ship ship)
        {
            if (ship == null||string.IsNullOrEmpty(ship.ShipID))
            {
                return false;
            }
            string sql = "UPDATE t_ships SET ShipNO=@ShipNO,ShipName=@ShipName,Owner=@Owner,OwnerCompany=@OwnerCompany ,Contact=@Contact,Lon=@Lon,Lat=@Lat where ShipID=@ShipID";
            SqlParameter[] pars = new SqlParameter[]{ new SqlParameter("@ShipID", SqlDbType.VarChar)
                ,new SqlParameter("@ShipNO", SqlDbType.VarChar)
                ,new SqlParameter("@ShipName", SqlDbType.VarChar)
                ,new SqlParameter("@Owner", SqlDbType.VarChar)
                ,new SqlParameter("@OwnerCompany", SqlDbType.VarChar)
                ,new SqlParameter("@Contact", SqlDbType.VarChar)
                ,new SqlParameter("@Lon", SqlDbType.Float)
                ,new SqlParameter("@Lat", SqlDbType.Float)};
            pars[0].Value = ship.ShipID;
            pars[1].Value = ship.ShipNO;
            pars[2].Value = ship.ShipName;
            pars[3].Value = ship.Owner;
            pars[4].Value = ship.OwnerCompany;
            pars[5].Value = ship.Contact;
            pars[6].Value = ship.Lon;
            pars[7].Value = ship.Lat;
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
                List<string> sqls=new List<string>();
                List<SqlParameter[]> parlist=new List<SqlParameter[]>();
                foreach (var id in ids)
                {
                    string sql = "DELETE FROM t_ships where ShipID=@ShipID";
                    SqlParameter[] pars = new SqlParameter[]{ new SqlParameter("@ShipID", SqlDbType.VarChar)};
                    pars[0].Value = id;

                    sqls.Add(sql);
                    parlist.Add(pars);
                }
                return SQLHelper.Instance.ExecSqlByTran(sqls, parlist);
            }
        }
    }
}
