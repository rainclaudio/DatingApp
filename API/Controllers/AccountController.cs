﻿using System.Security.Cryptography;
using System.Text;
using API.Controllers;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API;

public class AccountController : BaseApiController
{
  private readonly DataContext _context;

  public AccountController(DataContext context)
  {
    _context = context;
  }

  [HttpPost("register")] // api/account/register : this will take the
  // lowercase name of the controller
  public async Task<ActionResult<AppUser>> Register(string username, string password)
  {
    // to hash password we'll use HMAC512
    // we are going to use this as salt
    using var hmac = new HMACSHA512();

    var user = new AppUser
    {
      UserName = username,
      PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password)),
      PasswordSalt = hmac.Key
    };

    _context.Users.Add(user);

    await _context.SaveChangesAsync();

    return user;
  }



}
