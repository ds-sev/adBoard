import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('Тестовый сервис', () => {
  let service: TestService
  beforeEach(() => {
    service = new TestService()
  })

  it('Должен быть создан экземпляр класса', () => {
    expect(service).toBeTruthy()
  });

  it('Должен суммировать числа', () => {
    const sum = service.sum(1, 2)
    expect(sum).toBe(3)
  })

  it('Должен вернуть undefined если не указан второй аргумент', () => {
    const sum = service.sum(2)
    expect(sum).toBeUndefined()
  })
});
