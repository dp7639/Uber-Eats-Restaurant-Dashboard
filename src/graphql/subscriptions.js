/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourier = /* GraphQL */ `
  subscription OnCreateCourier {
    onCreateCourier {
      id
      name
      sub
      lat
      lng
      transportationMode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCourier = /* GraphQL */ `
  subscription OnUpdateCourier {
    onUpdateCourier {
      id
      name
      sub
      lat
      lng
      transportationMode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCourier = /* GraphQL */ `
  subscription OnDeleteCourier {
    onDeleteCourier {
      id
      name
      sub
      lat
      lng
      transportationMode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrderDish = /* GraphQL */ `
  subscription OnCreateOrderDish {
    onCreateOrderDish {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderDishDishId
    }
  }
`;
export const onUpdateOrderDish = /* GraphQL */ `
  subscription OnUpdateOrderDish {
    onUpdateOrderDish {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderDishDishId
    }
  }
`;
export const onDeleteOrderDish = /* GraphQL */ `
  subscription OnDeleteOrderDish {
    onDeleteOrderDish {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderDishDishId
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      userID
      Restaurant {
        id
        name
        image
        deliveryFee
        minDeliveryTime
        maxDeliveryTime
        rating
        address
        lat
        lng
        adminSub
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      total
      status
      OrderDishes {
        nextToken
        startedAt
      }
      Courier {
        id
        name
        sub
        lat
        lng
        transportationMode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderRestaurantId
      orderCourierId
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      userID
      Restaurant {
        id
        name
        image
        deliveryFee
        minDeliveryTime
        maxDeliveryTime
        rating
        address
        lat
        lng
        adminSub
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      total
      status
      OrderDishes {
        nextToken
        startedAt
      }
      Courier {
        id
        name
        sub
        lat
        lng
        transportationMode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderRestaurantId
      orderCourierId
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      userID
      Restaurant {
        id
        name
        image
        deliveryFee
        minDeliveryTime
        maxDeliveryTime
        rating
        address
        lat
        lng
        adminSub
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      total
      status
      OrderDishes {
        nextToken
        startedAt
      }
      Courier {
        id
        name
        sub
        lat
        lng
        transportationMode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderRestaurantId
      orderCourierId
    }
  }
`;
export const onCreateBasketDish = /* GraphQL */ `
  subscription OnCreateBasketDish {
    onCreateBasketDish {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      basketID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketDishDishId
    }
  }
`;
export const onUpdateBasketDish = /* GraphQL */ `
  subscription OnUpdateBasketDish {
    onUpdateBasketDish {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      basketID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketDishDishId
    }
  }
`;
export const onDeleteBasketDish = /* GraphQL */ `
  subscription OnDeleteBasketDish {
    onDeleteBasketDish {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      basketID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketDishDishId
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      address
      lat
      lng
      Orders {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      address
      lat
      lng
      Orders {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      address
      lat
      lng
      Orders {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBasket = /* GraphQL */ `
  subscription OnCreateBasket {
    onCreateBasket {
      id
      BasketDishes {
        nextToken
        startedAt
      }
      userID
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBasket = /* GraphQL */ `
  subscription OnUpdateBasket {
    onUpdateBasket {
      id
      BasketDishes {
        nextToken
        startedAt
      }
      userID
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBasket = /* GraphQL */ `
  subscription OnDeleteBasket {
    onDeleteBasket {
      id
      BasketDishes {
        nextToken
        startedAt
      }
      userID
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateDish = /* GraphQL */ `
  subscription OnCreateDish {
    onCreateDish {
      id
      name
      image
      description
      price
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateDish = /* GraphQL */ `
  subscription OnUpdateDish {
    onUpdateDish {
      id
      name
      image
      description
      price
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteDish = /* GraphQL */ `
  subscription OnDeleteDish {
    onDeleteDish {
      id
      name
      image
      description
      price
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant {
    onCreateRestaurant {
      id
      name
      image
      deliveryFee
      minDeliveryTime
      maxDeliveryTime
      rating
      address
      lat
      lng
      Dishes {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      adminSub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant {
    onUpdateRestaurant {
      id
      name
      image
      deliveryFee
      minDeliveryTime
      maxDeliveryTime
      rating
      address
      lat
      lng
      Dishes {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      adminSub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant {
    onDeleteRestaurant {
      id
      name
      image
      deliveryFee
      minDeliveryTime
      maxDeliveryTime
      rating
      address
      lat
      lng
      Dishes {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      adminSub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
