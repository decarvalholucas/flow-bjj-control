import { User } from "../../entities/User";
import type { IUsersRepository } from "../IUsersRepository"
// Esta classe implementa o contrato IUsersRepository
// usando um array em memória para simular um banco de dados.
export class InMemoryUsersRepository implements IUsersRepository {
  
  // Nosso "banco de dados" fake
  private users: User[] = [];

  // Implementação do método de busca
  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find(user => user.email === email);

    if (!user) {
      return null;
    }

    return user;
  }

  // Implementação do método de salvar
  async save(user: User): Promise<void> {
    // Procura se o usuário já existe pelo ID
    const userIndex = this.users.findIndex(u => u.id === user.id);

    if (userIndex >= 0) {
      // Se existe, atualiza o usuário na lista
      this.users[userIndex] = user;
    } else {
      // Se não existe, adiciona (cria) o usuário na lista
      this.users.push(user);
    }
  }
}