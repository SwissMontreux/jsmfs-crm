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
          "name": "hubspot_order_id"
        },
        {
          "type": "text",
          "name": "perk_name"
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
          "name": "member_id"
        },
        {
          "type": "text",
          "name": "perk_id"
        }
      ],
      "outputType": "array"
    },
    "tableRepeat1": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
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
          "name": "hubspot_order_id"
        },
        {
          "type": "text",
          "name": "perk_name"
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
          "name": "member_id"
        },
        {
          "type": "text",
          "name": "perk_id"
        }
      ],
      "outputType": "array"
    }
  },
  "mfsorders": {
    "query": [
      {
        "type": "text",
        "name": "offset"
      },
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "limit"
      },
      {
        "type": "text",
        "name": "dir"
      }
    ],
    "tableRepeat1": {
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
          "name": "first_name"
        },
        {
          "type": "text",
          "name": "last_name"
        },
        {
          "type": "text",
          "name": "perk_name"
        },
        {
          "type": "text",
          "name": "mfs_order_id"
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
        }
      ],
      "outputType": "array"
    },
    "dvMfsOrders": {
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
          "name": "first_name"
        },
        {
          "type": "text",
          "name": "last_name"
        },
        {
          "type": "text",
          "name": "perk_name"
        },
        {
          "type": "text",
          "name": "mfs_order_id"
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
        }
      ],
      "outputType": "array"
    }
  },
  "jsorders": {
    "query": [
      {
        "type": "text",
        "name": "offset"
      },
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "limit"
      },
      {
        "type": "text",
        "name": "dir"
      }
    ],
    "dvJSOrders": {
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
          "name": "first_name"
        },
        {
          "type": "text",
          "name": "last_name"
        },
        {
          "type": "text",
          "name": "perk_name"
        },
        {
          "type": "text",
          "name": "mfs_order_id"
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
        }
      ],
      "outputType": "array"
    }
  },
  "perks": {
    "query": [
      {
        "type": "text",
        "name": "offset"
      },
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "limit"
      },
      {
        "type": "text",
        "name": "dir"
      }
    ],
    "dvPerks": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "perk_id"
        },
        {
          "type": "text",
          "name": "perk_name"
        },
        {
          "type": "text",
          "name": "category"
        }
      ],
      "outputType": "array"
    },
    "repeat1": {
      "meta": [
        {
          "type": "text",
          "name": "category"
        }
      ],
      "outputType": "array"
    }
  },
  "allmembers": {
    "query": [
      {
        "type": "text",
        "name": "offset"
      },
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "limit"
      },
      {
        "type": "text",
        "name": "dir"
      }
    ],
    "dvAllMembers": {
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
          "name": "member_id"
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
          "name": "company_name"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "telephone"
        },
        {
          "type": "text",
          "name": "address1"
        },
        {
          "type": "text",
          "name": "address2"
        },
        {
          "type": "text",
          "name": "town/city"
        },
        {
          "type": "text",
          "name": "county"
        },
        {
          "type": "text",
          "name": "psotcode"
        },
        {
          "type": "text",
          "name": "country"
        }
      ],
      "outputType": "array"
    },
    "tableRepeat2": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
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
          "name": "member_id"
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
          "name": "company_name"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "telephone"
        },
        {
          "type": "text",
          "name": "address1"
        },
        {
          "type": "text",
          "name": "address2"
        },
        {
          "type": "text",
          "name": "town/city"
        },
        {
          "type": "text",
          "name": "county"
        },
        {
          "type": "text",
          "name": "psotcode"
        },
        {
          "type": "text",
          "name": "country"
        }
      ],
      "outputType": "array"
    }
  },
  "mfsmembers": {
    "query": [
      {
        "type": "text",
        "name": "offset"
      },
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "dir"
      },
      {
        "type": "text",
        "name": "limit"
      }
    ],
    "dvMFSMembers": {
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
          "name": "member_id"
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
          "name": "company_name"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "telephone"
        },
        {
          "type": "text",
          "name": "address1"
        },
        {
          "type": "text",
          "name": "address2"
        },
        {
          "type": "text",
          "name": "town/city"
        },
        {
          "type": "text",
          "name": "county"
        },
        {
          "type": "text",
          "name": "psotcode"
        },
        {
          "type": "text",
          "name": "country"
        }
      ],
      "outputType": "array"
    }
  },
  "jsmembers": {
    "query": [
      {
        "type": "text",
        "name": "sort"
      },
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
        "name": "dir"
      }
    ],
    "dvJsMembers": {
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
          "name": "member_id"
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
          "name": "company_name"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "telephone"
        },
        {
          "type": "text",
          "name": "address1"
        },
        {
          "type": "text",
          "name": "address2"
        },
        {
          "type": "text",
          "name": "town/city"
        },
        {
          "type": "text",
          "name": "county"
        },
        {
          "type": "text",
          "name": "psotcode"
        },
        {
          "type": "text",
          "name": "country"
        }
      ],
      "outputType": "array"
    }
  },
  "documents": {
    "query": [
      {
        "type": "text",
        "name": "offset"
      },
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "limit"
      },
      {
        "type": "text",
        "name": "dir"
      }
    ],
    "dvDocuments": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "document_id"
        },
        {
          "type": "text",
          "name": "document_name"
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
          "name": "visible"
        },
        {
          "type": "text",
          "name": "type"
        },
        {
          "type": "text",
          "name": "rm_tracking"
        },
        {
          "type": "datetime",
          "name": "created_at"
        },
        {
          "type": "text",
          "name": "document_location"
        }
      ],
      "outputType": "array"
    }
  },
  "membersprofile": {
    "query": [
      {
        "type": "text",
        "name": "offset"
      },
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "limit"
      },
      {
        "type": "text",
        "name": "dir"
      }
    ],
    "dvMemberDetails": {
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
          "type": "text",
          "name": "member_id"
        },
        {
          "type": "text",
          "name": "perk_id"
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
          "name": "perk_name"
        },
        {
          "type": "text",
          "name": "category"
        }
      ],
      "outputType": "array"
    },
    "tableRepeat2": {
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
          "type": "text",
          "name": "member_id"
        },
        {
          "type": "text",
          "name": "perk_id"
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
          "name": "perk_name"
        },
        {
          "type": "text",
          "name": "category"
        }
      ],
      "outputType": "array"
    }
  }
});
