window.DAILY_SIGNALS = [
  {
    "id": "ucp-20260814-payment-terms-pr-602",
    "event_key": "ucp:pr:602:payment-terms",
    "event_id": "PR-602",
    "demo": false,
    "title": "UCP 合并 Payment Terms，支持 Agent 在结账中选择定金、延期与分期计划",
    "summary": "Universal Commerce Protocol 合并 PR #602，新增 dev.ucp.shopping.payment_terms：商户可在同一 Checkout 提供立即全额、定金后付余额或分期等条款，Buyer/Agent 选择后由商户重新计算结账；成交订单保留 accepted_term 与绝对到期时间。",
    "decision": "include",
    "confidence": 98,
    "relevance_level": "P1",
    "signal_type": "core",
    "content_type": "technical_update",
    "information_type": "protocol_standard",
    "evidence_level": "confirmed",
    "source": "Universal Commerce Protocol GitHub",
    "url": "https://github.com/Universal-Commerce-Protocol/ucp/pull/602",
    "canonical_url": "https://github.com/Universal-Commerce-Protocol/ucp/pull/602",
    "published_at": "2026-08-14T17:04:32Z",
    "current_evidence": "GitHub PR #602 于 2026-08-14 合并；PR 正文和 schema 说明 terms、selected_term_id、accepted_term、schedule amount 与 due_at 的协议行为。",
    "payment_landing_evidence": "商户在 Checkout 报出付款条款，Buyer/Agent 选择付款计划，订单保存已接受条款及每期金额和到期时间，形成可执行的收款时序。",
    "primary_tags": [
      "UCP",
      "Agent Checkout",
      "Payment Terms"
    ],
    "secondary_tags": [
      "Deposit",
      "Installments",
      "Deferred Payment",
      "Merchant"
    ],
    "why_it_matters_cn": "UCP 从一次性结账扩展到付款时间和条款协商，Agent 不仅选择商品和支付工具，还要理解并接受未来付款义务。",
    "potential_impact_on_lianlian_cn": "连连的收单、订单、授权、分期、后续扣款与对账模型可能需要承接 UCP 的 term/schedule 语义，并保留 Agent 接受条款的审计证据。",
    "product_opportunity_cn": "建立 UCP Payment Terms 到支付计划、后续扣款授权、到期提醒、失败重试、退款和对账字段的映射 PoC。",
    "competitive_risk_cn": "若 UCP 与平台先控制付款条款协商，PSP 可能只执行后续扣款，难以掌握 Agent 与商户的结账决策入口。",
    "recommended_action": "investigate",
    "recommended_owner": [
      "产品",
      "支付技术",
      "风控合规"
    ],
    "questions_to_validate": [
      "selected_term 是否构成后续扣款的充分授权？",
      "分期失败、部分退款和争议如何映射到 schedule？",
      "跨境场景的币种、利息披露和消费者信贷责任由谁承担？"
    ],
    "follow_up_triggers": [
      "Payment Terms 进入稳定版或主流平台实现",
      "补充 instrument-to-schedule 绑定",
      "出现商户生产接入或延期扣款案例"
    ],
    "related_sources": [],
    "scores": {
      "agentic_relevance": 5,
      "payment_relevance": 5,
      "infrastructure_value": 5,
      "strategic_value": 5,
      "source_quality": 5,
      "lianlian_relevance": 5,
      "cross_border_value": 3,
      "merchant_value": 5,
      "product_actionability": 5,
      "competitive_impact": 5
    },
    "event_date": "2026-08-15",
    "report_date": "2026-08-17",
    "first_seen_date": "2026-08-17",
    "last_seen_date": "2026-08-17",
    "run_dates": [
      "2026-08-17"
    ]
  },
  {
    "id": "x402-20260814-weekend-settlement-reliability-batch",
    "event_key": "x402:weekend-batch:svm-settlement-monad-signing:2026-08-14",
    "event_id": "PR-3155+PR-3153",
    "demo": false,
    "title": "x402 同批修复 SVM 结算可靠性与 Monad USDC 付款失败",
    "summary": "x402 Foundation 在周五合并两项支付可靠性更新：PR #3155 为 SVM upto 的 open、claim/cancel 与租金回收加入计算预算和优先费控制，并披露与生产 Facilitator 的 open→serve→claim 兼容性实测；PR #3153 修正 Monad USDC v1 的 EIP-712 domain name，解决 Go/Python exact 付款的链上签名恢复失败。",
    "decision": "include",
    "confidence": 98,
    "relevance_level": "P1",
    "signal_type": "core",
    "content_type": "technical_update",
    "information_type": "developer_ecosystem",
    "evidence_level": "confirmed",
    "source": "x402 Foundation GitHub",
    "url": "https://github.com/x402-foundation/x402/pull/3155",
    "canonical_url": "https://github.com/x402-foundation/x402/pull/3155",
    "published_at": "2026-08-14T14:19:14Z",
    "event_date": "2026-08-14",
    "current_evidence": "GitHub PR #3155 与 #3153 均已合并；前者给出 devnet 交易、生产 Facilitator 兼容性与单元测试结果，后者以部署合约 name 和 DOMAIN_SEPARATOR 核验签名域修复。",
    "payment_landing_evidence": "SVM upto 的 open→serve→claim 是实际服务交付后的收款结算流程；Monad USDC v1 exact 使用 EIP-3009 签名执行付款，错误 domain 会直接导致链上付款失败。",
    "primary_tags": [
      "x402",
      "Payment Reliability",
      "SVM"
    ],
    "secondary_tags": [
      "Facilitator",
      "Settlement",
      "USDC",
      "Monad",
      "EIP-712"
    ],
    "why_it_matters_cn": "两项更新覆盖机器支付的两个生产故障面：结算交易在拥堵下的费用与吞吐，以及多链资产元数据错误造成的签名失败。Agent 自动付款需要同时保证交易能被及时打包和签名能被正确验证。",
    "potential_impact_on_lianlian_cn": "连连若运营或接入 x402 Facilitator，需要把计算预算、优先费、重试、过期窗口、多链 token domain 与跨 SDK 一致性纳入结算 SLA 和支付可观测性。",
    "product_opportunity_cn": "建立统一 Facilitator 可靠性 PoC：按拥堵和 voucher 到期时间调整费用，验证 open/claim/cancel，维护经链上验证的资产元数据注册表，并支持失败诊断和紧急回滚。",
    "competitive_risk_cn": "参考实现正在把链上结算运营经验和资产兼容修复固化为默认能力；缺少独立校验与动态费用策略的 PSP 会暴露已服务未收款和商户支付失败风险。",
    "recommended_action": "investigate",
    "recommended_owner": [
      "支付技术",
      "资金结算",
      "质量保障"
    ],
    "questions_to_validate": [
      "主网拥堵时 claim 的成功率、费用和过期风险如何？",
      "历史 Monad USDC v1 失败付款能否识别并安全重试？",
      "其他链、资产和 SDK 是否存在同类 domain 漂移？"
    ],
    "follow_up_triggers": [
      "正式版本包含两项修复",
      "公开主网 Facilitator 结算数据",
      "资产表增加自动链上校验与回滚"
    ],
    "related_sources": [
      "https://github.com/x402-foundation/x402/pull/3153",
      "https://github.com/x402-foundation/x402/commit/167a828e8319aa7b403f4f4312489e9cffadff10"
    ],
    "scores": {
      "agentic_relevance": 5,
      "payment_relevance": 5,
      "infrastructure_value": 5,
      "strategic_value": 4,
      "source_quality": 5,
      "lianlian_relevance": 4,
      "cross_border_value": 3,
      "merchant_value": 4,
      "product_actionability": 5,
      "competitive_impact": 4
    },
    "report_date": "2026-08-17",
    "first_seen_date": "2026-08-17",
    "last_seen_date": "2026-08-17",
    "run_dates": [
      "2026-08-17"
    ]
  }
];
