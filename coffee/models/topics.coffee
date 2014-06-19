
Dispatcher = require '../util/dispatcher'

store =
  topics: []
  draft: ''

module.exports = model = new Dispatcher

model.findOne = (topicId) ->
  for topic in store.topics
    if topic.topicId is topicId
      return topic

model.save = (data) ->
  topic = @findOne data.topicId
  if topic?
    topic.text = data.text
  else
    store.topics.unshift data
  @emit()

model.get = ->
  store.topics

model.updateDraft = (draft) ->
  store.draft = draft

model.getDraft = ->
  store.draft