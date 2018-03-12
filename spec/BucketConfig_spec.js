const BucketConfig = require('../BucketConfig')
const chai = require('chai')

const notifications = require('./fixtures/notifications.json')
const notificationsWithConfigurations = require('./fixtures/notifications_with_configurations.json')
const configurations = require('./fixtures/configurations.json')

const expect = chai.expect

describe('BucketConfig', function() {
  describe('addNewNotifications', function() {
    it('adds notifications existing only in the file to the config', function() {
      let bucketConfig = new BucketConfig(notifications)
      bucketConfig.addNewNotifications(configurations)
      expect(bucketConfig.getConfig()).to.deep.eq(notificationsWithConfigurations)
    })
  })
})

