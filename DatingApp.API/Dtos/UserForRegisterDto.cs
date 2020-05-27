using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        [StringLength(20, MinimumLength = 3, ErrorMessage = "You must specify username between 3 and 20 characters")]
        public string Username { get; set; }

        [Required]
        [StringLength(14, MinimumLength = 6, ErrorMessage = "You must specify password between 6 and 14 characters")]
        public string Password { get; set; }
    }
}