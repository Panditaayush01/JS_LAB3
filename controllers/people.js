exports.index = (req, res) => {
    res.status(200).json([
        {
            pID: 12001,
            name: 'Aayush Aayush',
            age: 21,
            hobby: 'Playing cricket'
        },
        {
            pID: 12002,
            name: 'Steve Smith',
            age: 32,
            hobby: 'Snooker'
        },
        {
            pID: 12003,
            name: 'David Lehmann',
            age: 27,
            hobby: 'Gym and fitness'
        },
        {
            pID: 12004,
            name: 'Sarah Holmes',
            age: 16,
            hobby: 'Music'
        }
    ]);
};

exports.show = async (req, res) => {
    if (req.params.id == 12001) {
        res.status(200).json(
            {
                pID: 12001,
                name: 'Aayush Aayush',
                age: 21,
                hobby: 'Playing cricket'
            })
    }
    else if (req.params.id == 12002) {
        res.status(200).json(
            {
                pID: 12002,
                name: 'Steve Smith',
                age: 32,
                hobby: 'Snooker'
            }
        );
    }
    else if (req.params.id == 12003) {
        res.status(200).json(
            {
                pID: 12003,
                name: 'David Lehmann',
                age: 27,
                hobby: 'Gym and fitness'
            }
        );
    }
    else if (req.params.id == 12004) {
        res.status(200).json(
            {
                pID: 12004,
                name: 'Sarah Holmes',
                age: 16,
                hobby: 'Music'
            }
        );
    }
};
