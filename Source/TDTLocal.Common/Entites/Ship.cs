using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ShipsTracks.Common.Entites
{
    public class Ship
    {
        public string ShipID
        {
            get;
            set;
        }
        public string ShipNO
        {
            get;
            set;
        }
        public string ShipName
        {
            get;
            set;
        }
        public string Owner
        {
            get;
            set;
        }
        public string OwnerCompany
        {
            get;
            set;
        }
        public string Contact
        {
            get;
            set;
        }
        public float Lon
        {
            get;
            set;
        }
        public float Lat
        {
            get;
            set;
        }
    }
}
