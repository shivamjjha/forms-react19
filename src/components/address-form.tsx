'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AddressForm() {

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Address Information</CardTitle>
        <CardDescription>Please enter your shipping address details below.</CardDescription>
      </CardHeader>
      <CardContent>
        <form  className="space-y-6" autoComplete="on">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="streetAddress">Street Address</Label>
              <Input
                id="streetAddress"
                name="streetAddress"
                placeholder="123 Main St"
                // required
                minLength={5}
                maxLength={100}
                autoComplete="street-address"
                aria-describedby="streetAddress-error"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="apartment">Apartment/Suite (Optional)</Label>
              <Input
                id="apartment"
                name="apartment"
                placeholder="Apt 4B"
                maxLength={20}
                autoComplete="address-line2"
                aria-describedby="apartment-error"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  placeholder="New York"
                  required
                  minLength={2}
                  maxLength={50}
                  autoComplete="address-level2"
                  aria-describedby="city-error"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  name="state"
                  placeholder="NY"
                  required
                  minLength={2}
                  maxLength={50}
                  autoComplete="address-level1"
                  aria-describedby="state-error"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  placeholder="10001"
                  required
                  pattern="[0-9]{5}(-[0-9]{4})?"
                  maxLength={10}
                  autoComplete="postal-code"
                  aria-describedby="zipCode-error"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  name="country"
                  placeholder="United States"
                  required
                  minLength={2}
                  maxLength={56}
                  autoComplete="country-name"
                  aria-describedby="country-error"
                />

              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full"
          >
            Save Address
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

