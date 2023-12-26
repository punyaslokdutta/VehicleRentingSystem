

// add_branch(‘koramangala’, [“1 suv for Rs.12 per hour”, 
// “3 sedan for Rs.10 per hour”, “3 bikes for Rs.20 per hour”]); 


var Branch = require('../models/branch')


exports.getBranch = async function(req, res, next) {
    try {
      const branch = await Branch.findById(req.params.id).exec();
      if (!branch) {
        console.log("Booking not found")
      }
      res.status(200).json(branch);
    } catch (error) {
      next(500, 'Internal Server Error');
    }
    
  };
  

exports.getOrFilterBranches = async (req, res, next) => {
    try {
      const searchTerm = req.query.searchTerm;
      let filter = {};
  
      if (searchTerm) {
        filter.$text = { $search: searchTerm };
      }
      const branches = await Branch.find(filter)
        .sort({
          ...(searchTerm ? { score: { $meta: 'textScore' } } : {}),
          ...(maxPrice !== null ? { price: -1 } : {}), 
        })
        .exec();
  
      res.status(200).json(branches);
    } catch (error) {
      console.error('Error:', error);
    }
  };



  exports.addBranch = async (req, res, next) => {
    const { name, vehicles } = req.body;
    const branch = await Branch.create({
      name,
      vehicles,
    });
    res.status(201).json({
      id: branch.id,
      name: branch.name,
      vehicles: branch.vehicles,
    });
  
  };
  