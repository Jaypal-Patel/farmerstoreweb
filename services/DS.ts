interface FarmerStore {
    admins: {
        id: {
            name: string,
            role: "Admin",
            createdAt: string
        }
    },

    users: {
        firstName: string,
        lastName: string,
        email: string,
        phoneNo: string,
        source?: "web" | "android" | "ios",
        createdAt: Date,
        role: "User",
        profilePic: {
            url: string
        },
        wallet: {
            cashback: number,
            walletAmount: number,
        },

        // cartId: string, //cart ID
        // cartOwner: boolean,
        familyId: string,
        familyOwner: boolean,

        totalFamilyMembers?: number,

        // family: {//subcollection
        //     id: { //userId
        //         name: string,
        //         relation: string,
        //         phoneNo: string,
        //         status: "Pending" | "Approved" | "Rejected",
        //     },
        // },

        "cart": { //subcollection
            id: {
                addedBy: {
                    name: string,
                    id: string,
                },
                productId: string,
                name: string,
                description: string,
                quantity: number,
                price: {
                    discountedPrice: number,
                    mrpPrice: number,
                },
                img: {
                    url: string,
                },
                sku: string,
                tax: {
                    gstExclusive: boolean,
                    gst: number,
                },
                vendorId?: string,
                productType: "default" | "Made2Order" | "Subscription",
                isPriceList: boolean,
                variant: {
                    weight: string,
                }

                status: boolean,
                availableQuantity: number,
                isCod?: boolean,
                keywords: [string],
                stopWhenNoQuanity: boolean

            }
        },

        wishlist: { //subcollection
            id: { // productId
                createdAt: Date,
            }
        },

        addresses: {}, //same as v2

        walletTransactions: { //subcollection - same as v2 transactions

        }
    }

    Family: {
        id: {
            owner: string, //userID of the cart owner
            members: [{
                name: string,
                relation: string,
                phoneNo: string,
                userId: string,
                addedOn: string,
            }],
            name?: string,
            subscriptions: [string] //subscriptionID
        },

        "cart": { //same as v2 with less details
            id: {
                addedBy: {
                    name: string,
                    id: string,
                },
                productId: string,
                name: string,
                description: string,
                quantity: number,
                price: {
                    discountedPrice: number,
                    mrpPrice: number,
                },
                img: {
                    url: string,
                },
                sku: string,
                tax: {
                    gstExclusive: boolean,
                    gst: number,
                },
                vendorId?: string,
                productType: "default" | "Made2Order" | "Subscription",
                isPriceList: boolean,
                variant: {
                    weight: string,
                }




                status: boolean,
                availableQuantity: number,
                isCod?: boolean,
                keywords: [string],
                stopWhenNoQuanity: boolean

            }
        },

    }

    Products: {
        name: string,
        img: {
            url: string,
        },
        images: [{
            url: string
        }],
        sku: string,
        isPriceList: boolean,

        productSkus: [string],

        priceList: [
            {
                weight: string,
                price: {
                    discountedPrice: number,
                    mrpPrice: number,
                }
                quantity: number,
                sku: string,
                images?: [
                    {
                        url: string
                    }
                ]
            }
        ],

        slug: string,

        categoryName?: string,

        categories: [string], //category id
        shortDescription?: string,
        productDescription: string, //html
        ratings: {
            total: number,
            average: number
        },
        price: {
            discountedPrice: number,
            mrpPrice: number,
        }
        keywords: [],

        tags?: [], //for filtering options

        productType: "Subscription" | "default" | "Made2Order",

        metaData?: {
            title: string,
            description: string,
            keywords: string,
        }

        createdAt: Date,

        reviews: { //subcollections
            id: {
                msg: string,
                reviewedBy: {
                    name: string,
                    id: string, //userId
                },
                createdAt: Date,
                rating: number,
            }
        }
    },

    Categories: {
        name: string,
        createdAt: string,
        slug: string,
        img: {
            url: string
        },
        isSubCategory: boolean,

        subCategoriesName?: [string],

    },

    "Categories-L1": {
        name: string,
        createdAt: string,
        slug: string,
        img: {
            url: string
        },
        isSubCategory?: boolean,
        categories: [string] //parent category Id
        subCategoriesName?: [string],
    },

    Orders: {
        id: {
            user: {
                id: string,
                name: string
            },
            deliveryCharges: number,
            metaData: {
                source: "Web" | "Android" | "Ios"
            },


            products: {
                "productSku": {
                    addedBy: {
                        name: string,
                        id: string,
                    },
                    productId: string,
                    name: string,
                    description: string,
                    quantity: number,
                    price: {
                        discountedPrice: number,
                        mrpPrice: number,
                    },
                    img: {
                        url: string,
                    },
                    sku: string,
                    tax: {
                        gstExclusive: boolean,
                        gst: number,
                    },
                    vendorId?: string,
                    productType: "default" | "Made2Order" | "Subscription",
                    isPriceList: boolean,
                    variant: {
                        weight: string,
                    },

                    shippingMetaData: {
                        status: "Delivered" | "Returned" | "Dispatched",

                        //for delivery integrations,
                        deliveryTrackingId?: string,
                    }

                }
            },
            //cart products,


            shippingAddress: {},
            billingAddress: {},

            orderId: number,

            status: "Confirmed" | "Pending" | "Cancelled" | "Rejected" | "Dispatched" | "Delivered",
            createdAt: Date,

            orderTimeline: {
                "createdAt": Date,
                "confirmedAt": Date,
                "cancelledAt": Date,
                "rejectedAt": Date,
                "dispatchedAt": Date,
                "deliveredAt": Date,
            },

            invoice: {
                url: string, //pdf url
                id?: string,
            },

            payment: {
                mode: "Cash" | "Online",
                details: any, //payment details id or object,
                status: "Success" | "Fail" | "Pending",
                paymentAmount: number
            },

            isCouponUsed: boolean,
            coupon: {
                id: string,
                discountedAmount: number,
                couponType: "Flat" | "Percentage",
                code: string,
            },

            isWalletUsed: boolean,
            wallet: {
                cashbackAmount: number,
                walletAmount: number
            },

            priceBreakdown: {
                subtotalAmount: number,
                discount: number,
                totalOrderAmount: number,
            }

        }
    },

    Subscriptions: {
        id: {
            user: {
                id: string,
                name: string,
                phoneNo: string,
            },
            createdAt: Date,
            startDate: Date,
            endData: Date,
            plan: "Monthly" | "Weekly" | "Daily" | "Alternatively",
            price: number,
            payment: {
                details: any,
                transactionId: string,
                status: "Pending" | "Completed" | "Failed"
            },
            status: "Active" | "Paused" | "Cancelled",
            delivery: {
                timeSlot: string //10 AM
            },
            products: [{
                name: string,
                price: number,
                quantity: number,
                sku: string,
                image: {
                    url: string
                },
            }],
        }
    },

    BlogsCategory: {
        id: {
            name: string,
            createdAt: Date,
        }
    },



    Blogs: {
        id: {
            blogCategoryId: string,
            createdAt: Date,
            title: string,
            categoryTag: string,
            likes: number,
            type: "Video" | "Default",
            video: {
                duration: number,
                url: string,
                thumbnail: string
            },
            img: {
                url: string
            },

            content: string,
            description?: string,
            tags: [string],
            author: {
                name: string,
                img: {
                    url: string,
                },
                role: "Admin" | "User"
            },
            similarProductsTags?: [string],


            comments: { //subcollections
                id: {
                    commentedBy: {
                        userId: string,
                        name: string,
                    }
                    comment: string,
                    createdAt: Date,
                }
            }
        }
    },

    Faqs: {
        id: {
            question: string,
            answer: string,
            createdAt: Date,
        }
    },

    Coupons: {}//same as v2

    HomePage: {} // same as v2
}