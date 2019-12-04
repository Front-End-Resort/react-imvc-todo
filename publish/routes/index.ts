import express from 'express'

export function test(app: express.Application) {
  app.use('/test', (req, res, next) => {
    res.json('ok')
  })
}
