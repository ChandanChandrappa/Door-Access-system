using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DoorManagementSystem.Models;

namespace DoorManagementSystem.Services
{
    public class DoorsService
    {
        private static List<Door> doors = new List<Door>();
        private static int Count = 1;

        //static DoorsService()
        //{
        //    Door door = new Door
        //    {
        //        Id = 0,
        //        Name = "Door 0",
        //        IsLocked = true,
        //        IsOpen = true
        //    };

        //    doors.Add(door);
        //}

        public List<Door> GetAll()
        {
            return doors;
        }
        public Door Create(Door user)
        {
            user.Id = Count++;
            doors.Add(user);

            return user;
        }

        public void Update(int id, Door door)
        {
            Door found = doors.Where(n => n.Id == id).FirstOrDefault();
            found.Name = door.Name;
        }

        public void Delete(int id)
        {
            doors.RemoveAll(n => n.Id == id);
        }
    }
}
