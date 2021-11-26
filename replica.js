cfg = {
    _id: 'rs0',
    members: [
        { _id: 0, host: 'db-manager:27017', priority: 1},
        { _id: 1, host: 'db-node1:27017', priority: 0.5},
        { _id: 2, host: 'db-node2:27017', priority: 0.5}
    ]
}
rs.initiate(cfg)
