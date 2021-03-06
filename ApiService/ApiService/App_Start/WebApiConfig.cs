﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace ApiService
{
  public static class WebApiConfig
  {
    public static void Register(HttpConfiguration config)
    {
      //config.MessageHandlers.Add(new MessageHandler2());

      config.Routes.MapHttpRoute(
          name: "DefaultApi",
          routeTemplate: "api/{controller}/{action}/{id}",
          defaults: new { id = RouteParameter.Optional }
      );

      config.Routes.MapHttpRoute(
            name: "Route2",
            routeTemplate: "api2/Employee/{id}",
            defaults: new { controller = "Employee", id = RouteParameter.Optional },
            constraints: null,
            handler: new MessageHandler2(GlobalConfiguration.Configuration)  // per-route message handler
        );
      //config.MessageHandlers.Add(new MessageHandler1());

      //config.Routes.MapHttpRoute(
      //    name: "ApiByName",
      //    routeTemplate: "api/{controller}/{action}/{name}",
      //    defaults: new { name = RouteParameter.Optional }
      //);

      // Uncomment the following line of code to enable query support for actions with an IQueryable or IQueryable<T> return type.
      // To avoid processing unexpected or malicious queries, use the validation settings on QueryableAttribute to validate incoming queries.
      // For more information, visit http://go.microsoft.com/fwlink/?LinkId=279712.
      //config.EnableQuerySupport();

      // To disable tracing in your application, please comment out or remove the following line of code
      // For more information, refer to: http://www.asp.net/web-api
      config.EnableSystemDiagnosticsTracing();
    }
  }
}
