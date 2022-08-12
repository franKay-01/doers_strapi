module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c27be162dfc943277ac8382cbb2d5e78'),
  },
});
