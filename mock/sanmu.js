export default {
  'GET /api/totalSales': (req, res) => {
    res.send({
      success: true,
      data: {
        totalSales: '125,560',
        week: '16%',
        month: '18%',
        amount: '12,423',
      },
    });
  },
};
