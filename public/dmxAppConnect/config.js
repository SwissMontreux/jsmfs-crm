dmx.config({
  "allorders": {
    "query": [
      {
        "type": "text",
        "name": "offset"
      },
      {
        "type": "text",
        "name": "limit"
      },
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "dir"
      }
    ],
    "dvAllOrders": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "datetime",
          "name": "created_at"
        },
        {
          "type": "text",
          "name": "business_line"
        },
        {
          "type": "text",
          "name": "hubspot_order_id"
        },
        {
          "type": "number",
          "name": "order_total"
        },
        {
          "type": "number",
          "name": "discount_total"
        },
        {
          "type": "number",
          "name": "refunded_total"
        },
        {
          "type": "text",
          "name": "order_currency"
        },
        {
          "type": "text",
          "name": "payment_method"
        },
        {
          "type": "text",
          "name": "payment_status"
        },
        {
          "type": "text",
          "name": "order_note"
        },
        {
          "type": "text",
          "name": "tags"
        },
        {
          "type": "text",
          "name": "mfs_order_id"
        },
        {
          "type": "text",
          "name": "first_name"
        },
        {
          "type": "text",
          "name": "last_name"
        },
        {
          "type": "text",
          "name": "perk_name"
        }
      ],
      "outputType": "array"
    }
  }
});
