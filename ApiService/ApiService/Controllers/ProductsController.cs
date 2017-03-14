using ApiService.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ApiService.Controllers
{
  public class ProductsController : ApiController
  {
    [HttpGet]
    public IList<Product> GetProducts()
    {
      List<Product> listProducts = new List<Product>();

      string cs = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
      using (SqlConnection con = new SqlConnection(cs))
      {
        SqlCommand cmd = new SqlCommand("Select * from products", con);
        con.Open();
        SqlDataReader rdr = cmd.ExecuteReader();
        while (rdr.Read())
        {
          Product product = new Product();
          product.id = Convert.ToInt32(rdr["id"]);
          product.name = rdr["name"].ToString();
          product.description = rdr["description"].ToString();
          listProducts.Add(product);
        }
      }
      return listProducts;
    }
  }
}