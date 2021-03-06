/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

/**
 * @swagger
 * tags:
 *   name: Auth Mgt
 *   description: User management and login
 */

function list2(req, res) {

}

list2.swagger = {
  tags: [ 'User List' ],
  description: 'Return a user list (alternate)'
}

module.exports = {

  login: function (req, res) {

  },

  /**
   * @swagger
   *
   * /logout:
   *   summary: Perform Logout
   *   description: Logout of the application
   *   tags:
   *     - Auth Mgt
   *   parameters:
   *     - name: example-only
   *       description: Username to use for logout (dummy for test)
   *       in: path
   *       required: true
   *       schema:
   *         type: string
   *     - name: password
   *       description: User's password (dummy for test)
   *       in: query
   *       required: true
   *       schema:
   *         type: string
   *   responses:
   *     200:
   *       description: logout result
   */
  logout: function (req, res) {

  },

  upload: function (req, res) {

  },

  list: function (req, res) {

  },

  list2: list2,

  roles: function (req, res) {

  },

  swagger: {
    _list: {
      tags: ['User List'],
      description: 'Return a user list'
    },
    _tags: [
      {
        name: 'User List',
        description: 'Group just for user list operation',
      }
    ],
  },

};

