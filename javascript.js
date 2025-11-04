const GRAPHQL_ENDPOINT = 'https://api.vsc.eco/api/v1/graphql';

/**
 * 1. Consulta ações do livro-razão (ledger actions) com base em filtros.
 * @param {object} filterOptions - Opções de filtro.
 */
findLedgerTXs({ byAsset: 'hive',limit: 5, offset: 10 });
async function findLedgerActions({
  byAccount = null, byActionId = null, byAsset = null, byStatus = null, byTxId = null, byTypes = null, fromBlock = null,
  limit = 1, offset = null, toBlock = null}) {
  const filterOptions = { byAccount, byActionId, byAsset, byStatus, byTxId, byTypes, fromBlock, limit, offset, toBlock,  };
  const query = `
    query FindLedgerActions($filterOptions: LedgerActionsFilter) {
      findLedgerActions(filterOptions: $filterOptions) {
        action_id amount asset block_height id memo params status timestamp to type
      }
    }
  `;
  const variables = { filterOptions };
  return executeQuery('FindLedgerActions', query, variables);
}

/**
 * 2. Consulta transações do livro-razão (ledger transactions) com base em filtros.
 * @param {object} filterOptions - Opções de filtro.
 */
//findLedgerTXs({ byAsset: 'hive',limit: 5, offset: 10 });
async function findLedgerTXs({
  byAsset = null, byToFrom = null, byTxId = null, byTypes = null, fromBlock = null, limit = 1, offset = null, toBlock = null}) {
  const filterOptions = { byAsset, byToFrom, byTxId, byTypes, fromBlock, limit, offset, toBlock, };

  const query = `
    query FindLedgerTXs($filterOptions: LedgerTxFilter) {
      findLedgerTXs(filterOptions: $filterOptions) {
        amount asset block_height from id owner timestamp tx_id type
      }
    }
  `;
  const variables = { filterOptions };
  return executeQuery('FindLedgerTXs', query, variables);
}
/**
 * 3. Consulta transações detalhadas com base em filtros.
 * @param {object} filterOptions - Opções de filtro.
 */
//findTransaction({ limit: 5, offset: 10 });
async function findTransaction({
  byAccount = null, byContract = null, byId = null, byIds = null, byLedgerToFrom = null, byLedgerTypes = null, byStatus = null,
  byType = null, limit = 1, offset = 2}) {
  const filterOptions = {
    byAccount, byContract, byId, byIds, byLedgerToFrom, byLedgerTypes, byStatus, byType, limit, offset, };

  const query = `
    query FindTransaction($filterOptions: TransactionFilter) {
      findTransaction(filterOptions: $filterOptions) {
        anchr_height anchr_id anchr_index anchr_ts first_seen id
        ledger { amount asset from memo params to type }
        ledger_actions { amount asset data id memo status type to }
        nonce op_types ops { data index required_auths type }
        output { id index } rc_limit required_auths required_posting_auths status type
      }
    }
  `;
  const variables = { filterOptions };
  return executeQuery('FindTransaction', query, variables);
}

/**
 * 4. Consulta o saldo de uma conta específica em um determinado bloco.
 * @param {string} account - O ID da conta (obrigatório).
 * @param {string | number | null} height - Altura do bloco (opcional).
 */
async function getAccountBalance(account, height = null) {
  const query = `
    query GetAccountBalance($account: String!, $height: Uint64) {
      getAccountBalance(account: $account, height: $height) {
        account block_height consensus_unstaking hbd hbd_avg hbd_claim
        hbd_modify hbd_savings hive hive_consensus pending_hbd_unstaking
      }
    }
  `;
  const variables = { account, height };
  return executeQuery('GetAccountBalance', query, variables);
}

/**
 * 5. Consulta o nonce de uma conta específica.
 * @param {string} account - O ID da conta (obrigatório).
 */
async function getAccountNonce(account) {
  const query = `
    query GetAccountNonce($account: String!) {
      getAccountNonce(account: $account) {
        account nonce
      }
    }
  `;
  const variables = { account };
  return executeQuery('GetAccountNonce', query, variables);
}

/**
 * 6. Consulta os recursos computacionais (RC) de uma conta específica.
 * @param {string} account - O ID da conta (obrigatório).
 * @param {string | number | null} height - Altura do bloco (opcional).
 */
async function getAccountRC(account, height = null) {
  const query = `
    query GetAccountRC($account: String!, $height: Uint64) {
      getAccountRC(account: $account, height: $height) {
        account amount block_height max_rcs
      }
    }
  `;
  const variables = { account, height };
  return executeQuery('GetAccountRC', query, variables);
}

/**
 * 7. Consulta um DAG (Directed Acyclic Graph) pelo seu CID.
 * @param {string} cidString - O Content Identifier (CID) do DAG.
 */
async function getDagByCID(cidString) {
  const query = `
    query Query($cidString: String!) {
      getDagByCID(cidString: $cidString)
    }
  `;
  const variables = { cidString };
  return executeQuery('Query', query, variables, true); // Retorna a raiz da query
}

/**
 * 8. Consulta dados de eleição por época (epoch).
 * @param {number} epoch - O número da época.
 */
async function getElection(epoch) {
  const query = `
    query GetElection($epoch: Uint64!) {
      getElection(epoch: $epoch) {
        epoch net_id type data members { account key } weights protocol_version
        total_weight block_height proposer tx_id
      }
    }
  `;
  const variables = { epoch };
  return executeQuery('GetElection', query, variables);
}

/**
 * 9. Consulta o estado de um contrato por chaves específicas.
 * @param {string} contractId - O ID do contrato.
 * @param {string[]} keys - Uma lista de chaves para buscar no estado do contrato.
 */
async function getStateByKeys(contractId, keys) {
  const query = `
    query Query($contractId: String!, $keys: [String!]!) {
      getStateByKeys(contractId: $contractId, keys: $keys)
    }
  `;
  const variables = { contractId, keys };
  return executeQuery('Query', query, variables, true); // Retorna a raiz da query
}

/**
 * 10. Consulta uma chave TSS (Threshold Signature Scheme) por ID.
 * @param {string} keyId - O ID da chave TSS.
 */
async function getTssKey(keyId) {
  const query = `
    query GetTssKey($keyId: String!) {
      getTssKey(keyId: $keyId) {
        id status PublicKey Owner Algo CreatedHeight
      }
    }
  `;
  const variables = { keyId };
  return executeQuery('GetTssKey', query, variables);
}

/**
 * 11. Consulta requisições TSS (Threshold Signature Scheme).
 * @param {string} keyId - O ID da chave TSS (obrigatório).
 * @param {string[] | null} msgHex - Lista de mensagens em formato hexadecimal (opcional).
 */
async function getTssRequests(keyId, msgHex = null) {
  const query = `
    query GetTssRequests($keyId: String!, $msgHex: [String!]) {
      getTssRequests(keyId: $keyId, msgHex: $msgHex) {
        id status keyId msg sig
      }
    }
  `;
  const variables = { keyId, msgHex: msgHex || [] };
  return executeQuery('GetTssRequests', query, variables);
}

/**
 * 12. Consulta informações de um testemunha (witness).
 * @param {string} account - O ID da conta da testemunha (obrigatório).
 * @param {string | number | null} height - Altura do bloco (opcional).
 */
async function getWitness(account, height = null) {
  const query = `
    query GetWitness($account: String!, $height: Uint64) {
      getWitness(account: $account, height: $height) {
        account height did_keys { ct t key } enabled git_commit net_id peer_id
        protocol_version ts tx_id version_id gateway_key
      }
    }
  `;
  const variables = { account, height };
  return executeQuery('GetWitness', query, variables);
}

/**
 * 13. Consulta informações sobre o nó local da API (sem variáveis).
 */
async function localNodeInfo() {
  const query = `
    query LocalNodeInfo {
      localNodeInfo {
        version_id git_commit last_processed_block epoch
      }
    }
  `;
  return executeQuery('LocalNodeInfo', query, {});
}

/**
 * 14. Envia uma transação assinada (fora da cadeia / off-chain).
 * @param {string} tx - Transação em formato hexadecimal (obrigatório).
 * @param {string} sig - Assinatura em formato hexadecimal (obrigatório).
 */
async function submitTransactionV1(tx, sig) {
  const query = `
    query SubmitTransactionV1($tx: String!, $sig: String!) {
      submitTransactionV1(tx: $tx, sig: $sig) {
        id
      }
    }
  `;
  const variables = { tx, sig };
  return executeQuery('SubmitTransactionV1', query, variables);
}

/**
 * 15. Consulta a lista de nós testemunhas em uma altura de bloco específica.
 * @param {number} height - Altura do bloco (obrigatório).
 */
async function witnessNodes(height) {
  const query = `
    query WitnessNodes($height: Uint64!) {
      witnessNodes(height: $height) {
        account height did_keys { ct t key } enabled git_commit net_id peer_id
        protocol_version ts tx_id version_id gateway_key
      }
    }
  `;
  const variables = { height };
  return executeQuery('WitnessNodes', query, variables);
}


// --- Função Auxiliar Comum para Execução ---

/**
 * Função genérica para executar qualquer consulta GraphQL.
 * @param {string} operationName - Nome da operação GraphQL (ex: FindContract).
 * @param {string} query - String da query GraphQL.
 * @param {object} variables - Variáveis da query.
 * @param {boolean} returnRoot - Se deve retornar o objeto de dados principal ou o campo específico.
 */
async function executeQuery(operationName, query, variables, returnRoot = false) {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        operationName,
        query,
        variables,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json();

    if (result.errors) {
      console.error(`Erro na operação ${operationName}:`, result.errors);
      return null;
    }

    // Retorna o objeto de dados completo, ou a primeira chave dentro de 'data'
    const data = result.data;
    if (returnRoot) {
        return data;
    }

    const dataKey = Object.keys(data)[0];
    return data[dataKey];

  } catch (error) {
    console.error(`Erro ao executar a consulta ${operationName}:`, error);
    return null;
  }
}

// Para usar em um ambiente Node.js, você pode precisar de 'node-fetch'
// e exportar as funções:
// module.exports = { findLedgerActions, findLedgerTXs, ... };

// --- Exemplo de como usar (descomente para testar) ---
/*
async function runExamples() {
    console.log("--- Exemplo de getAccountBalance ---");
    const balance = await getAccountBalance("did:pkh:eip155:1:0x55357Aeec5bDe68Be42dA1FB97817847a10F5207");
    console.log(balance);

    console.log("\n--- Exemplo de localNodeInfo ---");
    const nodeInfo = await localNodeInfo();
    console.log(nodeInfo);
}

// runExamples();
*/