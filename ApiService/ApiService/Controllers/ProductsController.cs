using ApiService.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
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
    public IList<Product> GetProducts(string name)
    {
      List<Product> listProducts = null;

      string con = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
      DataSet ds = new DataSet();
      SqlDataAdapter da = new SqlDataAdapter("select P.id,P.name,p.description,p.price,p.mfcdate,p.quantity,c.id as categoryid,"+
                                    "c.name as category from products P inner join category C ON p.categoryid = c.id where p.name like '%" + name + "%'", con);
      da.Fill(ds);
      if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
      {
        listProducts = new List<Product>();
        foreach (DataRow dr in ds.Tables[0].Rows)
        {
          Product product = new Product();
          product.id = Convert.ToInt32(dr["id"]);
          product.name = dr["name"].ToString();
          product.description = dr["description"].ToString();
          product.price = Convert.ToDecimal(dr["price"]);
          product.quantity = Convert.ToInt32(dr["quantity"]);
          product.mfcdate = Convert.ToDateTime(dr["mfcdate"]);
          product.category = dr["category"].ToString();
          product.categoryId = Convert.ToInt32(dr["categoryid"]);

          listProducts.Add(product);
        }
      }
      return listProducts;
    }

    [HttpGet]
    public Product GetProduct(int id)
    {
      Product product = null;
      string cs = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
      using (SqlConnection con = new SqlConnection(cs))
      {
        SqlCommand cmd = new SqlCommand("select P.id,P.name,p.description,p.price,p.mfcdate,p.quantity,c.id as categoryid,c.name as category from products P inner join category C ON p.categoryid = c.id where p.id = " + id + "", con);
        con.Open();
        SqlDataReader rdr = cmd.ExecuteReader();
        if (rdr.Read())
        {
          product = new Product();
          product.id = Convert.ToInt32(rdr["id"]);
          product.name = rdr["name"].ToString();
          product.description = rdr["description"].ToString();
          product.price = Convert.ToDecimal(rdr["price"]);
          product.quantity = Convert.ToInt32(rdr["quantity"]);
          product.mfcdate = Convert.ToDateTime(rdr["mfcdate"]);
          product.category = rdr["category"].ToString();
          product.categoryId = Convert.ToInt32(rdr["categoryid"]);
        }
      }
      return product;
    }

    [HttpGet]
    public IList<Category> GetCategories()
    {
      List<Category> listCategories = null;

      string con = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
      DataSet ds = new DataSet();
      SqlDataAdapter da = new SqlDataAdapter("select * from category", con);
      da.Fill(ds);
      if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
      {
        listCategories = new List<Category>();
        foreach (DataRow dr in ds.Tables[0].Rows)
        {
          Category category = new Category();
          category.id = Convert.ToInt32(dr["id"]);
          category.name = dr["name"].ToString();
          listCategories.Add(category);
        }
      }
      return listCategories;
    }
  }
}