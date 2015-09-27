var items = [
    {
        id: 1,
        name: "Item 1",
        owner: 1,
        details: {
            description: 'Lorem ipsum'
        },
        filesTypes: [
            {
                file_id: 1,
                filename: "file1.obj",
                extension: "obj",
                distributions: [
                    {
                        id: 1,
                        name: "Shapeways",
                        price: 100
                    }
                ]
            }
        ],
        collections: [1],
        parts: [2],
        tags: [1]
    },
    {
        id: 2,
        name: "Item 2",
        owner: 1,
        details: {
            description: 'Lorem ipsum'
        },
        filesTypes: [
            {
                file_id: 2,
                filename: "file2.stl",
                extension: "stl",
                distributions: [
                    {
                        id: 2,
                        name: "Sculpteo",
                        price: 50.3
                    }
                ]
            }
        ],
        collections: [2, 3],
        parts: [],
        tags: [2, 3]
    },
    {
        id: 1,
        name: "Item 1",
        owner: 1,
        details: {
            description: 'Lorem ipsum'
        },
        filesTypes: [
            {
                file_id: 3,
                filename: "file1.obj",
                extension: "obj",
                distributions: [
                    {
                        id: 1,
                        name: "Shapeways",
                        price: 100
                    },
                    {
                        id: 5,
                        name: "Kraftwurks",
                        price: 50.5
                    }
                ]
            },
            {
                file_id: 4,
                filename: "file3.stl",
                extension: "stl",
                distributions: [
                    {
                        id: 2,
                        name: "Sculpteo",
                        price: 50.3
                    }
                ]
            }
        ],
        collections: [1, 2, 3],
        parts: [],
        tags: [1]
    }
];