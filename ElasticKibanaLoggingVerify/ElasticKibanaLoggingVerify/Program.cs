using Serilog;
using Serilog.Sinks.Elasticsearch;
using System.Reflection;

namespace ElasticKibanaLoggingVerify
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            //To get environment
            var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIORNMENT");

            Log.Logger = new LoggerConfiguration()
                .Enrich.FromLogContext()
                .Enrich.WithMachineName()
                .WriteTo.Debug()
                .WriteTo.Console()
                .WriteTo.Elasticsearch(new ElasticsearchSinkOptions(new Uri(builder.Configuration["ElasticConfiguration:Uri"]))
                { 
                    AutoRegisterTemplate=true,
                    IndexFormat =$"{Assembly.GetExecutingAssembly().GetName().Name.ToLower().Replace(".","-")}-{environment?.ToLower().Replace(".","-")}-{DateTime.UtcNow:yyyy-MM}"
                })
                .Enrich.WithProperty("Environment",environment)
                .ReadFrom.Configuration(builder.Configuration)
                .CreateLogger();

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}