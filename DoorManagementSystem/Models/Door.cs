using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoorManagementSystem.Models
{
    public class Door
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsLocked { get; set; }
        public bool IsOpen { get; set; }
    }
}
