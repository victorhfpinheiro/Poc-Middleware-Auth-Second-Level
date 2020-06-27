import { Request, Response, NextFunction } from 'express'

class AuthSecondLevel {
  public async validateAccountId (req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log('validateAccountId()')

    const { accountId } = req.body
    if (!accountId) {
      res.status(401).send({ error: 'accountId not found' })
    }

    next()
  }

  public async validateNrDocument (req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log('validateNrDocumento()')

    const { nrdocument } = req.body
    if (!nrdocument) {
      res.status(401).send({ error: 'nrdocument not found' })
    }

    next()
  }

  public async validateUUID (req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log('validateUUID()')

    const { uuid } = req.body
    if (!uuid) {
      res.status(401).send({ error: 'uuid not found' })
    }

    next()
  }

  public async validateBillingProfile (req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log('validateBillingProfile()')

    const { billingProfile } = req.body
    if (!billingProfile) {
      res.status(401).send({ error: 'billingProfile not found' })
    }

    next()
  }
}
export default new AuthSecondLevel()
