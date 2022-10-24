import { test, expect } from 'vitest'
import { Personal, PersonalInterface } from './Personal.model';
import { User } from './User.model';

test('create one Personal', () => {
    const personal = new Personal({
        id:1,
        user_id:1
    })
    expect(personal).toBeInstanceOf(Personal)
})

test('should be linked with user', async () => {
    
})

