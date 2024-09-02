using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using App.BusinessLogic.Interfaces;
using App.BusinessLogic.Profiles;
using App.BusinessLogic.Services;
using App.DataAccess.Interfaces;
using App.DataAccess.Repositories;
using App.API.Profiles;
using App.DataAccess.DataContext;

// Create the web application builder
var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers(); // Add MVC controllers

// Configure Swagger/OpenAPI for API documentation
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register application services and repositories
builder.Services.AddScoped<IBooksRepository, BooksRepository>(); // Register Books repository
builder.Services.AddScoped<IBookService, BookService>(); // Register Books service

builder.Services.AddScoped<IOrdersRepository, OrdersRepository>(); // Register Orders repository
builder.Services.AddScoped<IOrderService, OrderService>(); // Register Orders service

builder.Services.AddScoped<IUsersRepository, UsersRepository>(); // Register Users repository
builder.Services.AddScoped<IUserService, UserService>(); // Register Users service

// Register DbContext with SQL Server configuration
builder.Services.AddDbContext<BookMeContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("sql")); // Connection string for SQL Server
});

// Register AutoMapper with all relevant profiles
builder.Services.AddAutoMapper(cfg =>
{
    cfg.AddProfile<BookProfile>(); // Add AutoMapper profile for Book mappings
    cfg.AddProfile<ClientOrderProfile>(); // Add AutoMapper profile for Order mappings
});
builder.Services.AddAutoMapper(typeof(BookProfile).Assembly, typeof(ClientOrderProfile).Assembly); // Ensure all profiles are included

// Configure CORS policy
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("*") // Allow all origins (adjust as needed)
               .AllowAnyHeader() // Allow any headers
               .AllowAnyMethod(); // Allow any methods
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(); // Enable Swagger UI in development
    app.UseSwaggerUI(); // Swagger UI setup
}
else
{
    app.UseExceptionHandler("/Home/Error"); // Error handling for production
    app.UseHsts(); // Add HSTS for secure connections
}

app.UseHttpsRedirection(); // Redirect HTTP requests to HTTPS
app.UseStaticFiles(); // Serve static files
app.UseRouting(); // Enable routing
app.UseCors(); // Apply CORS policy
app.UseAuthorization(); // Enable authorization
app.MapControllers(); // Map controller endpoints

app.Run(); // Run the application
