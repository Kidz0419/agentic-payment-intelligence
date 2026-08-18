window.DAILY_SIGNALS = [
  {
    "id": "x402-batch-20260817-settlement-upto-reliability",
    "event_key": "x402:batch:2026-08-17:settlement-upto-reliability",
    "event_id": "PR-3083+PR-3141+PR-3183+PR-3180",
    "demo": false,
    "title": "x402 同批完善结算未知态、Solana 按量支付与 Facilitator 可靠性",
    "summary": "x402 Foundation 同批合并四项支付工程更新：PR #3083 引入 settlement_pending 与交易哈希，避免回执超时被误判失败并触发重复付款；#3141 将 SVM upto 按量结算引入 Go SDK；#3183 允许 Facilitator 注入自有 RPC 客户端以支持限速、重试和监控；#3180 修复缺失 accepted requirements 导致的支付协商运行时异常。",
    "decision": "include",
    "confidence": 98,
    "relevance_level": "P1",
    "signal_type": "core",
    "content_type": "technical_update",
    "information_type": "product_capability",
    "evidence_level": "confirmed",
    "source": "x402 Foundation GitHub",
    "url": "https://github.com/x402-foundation/x402/pull/3083",
    "canonical_url": "https://github.com/x402-foundation/x402/pull/3083",
    "published_at": "2026-08-17T21:06:47Z",
    "event_date": "2026-08-18",
    "current_evidence": "GitHub PR #3083、#3141、#3183、#3180 均已合并并保留独立事件 ID；#3141 尚未进入正式版本，#3183 的生产使用情况来自提交者披露。",
    "payment_landing_evidence": "四项更新共同覆盖机器支付的协商、预算上限、按实际用量 claim、交易广播、回执未知态、RPC 提交运维和租金回收，形成可执行且可恢复的支付结算链路。",
    "primary_tags": [
      "x402",
      "Settlement",
      "Usage-based Payment"
    ],
    "secondary_tags": [
      "SVM",
      "EVM",
      "Facilitator",
      "RPC",
      "Reconciliation",
      "Protocol Reliability"
    ],
    "matched_reason": "同一协议同一批次围绕按量支付和结算可靠性的工程更新，合并为一条综合信号并保留全部 PR。",
    "exclude_reason": "",
    "why_it_matters_cn": "x402 正从“能发起付款”推进到可运营的生产支付状态机：未知结果可对账、按量付款可跨 SDK 执行、链上提交可纳入 RPC 运维控制，畸形 Agent 请求也可稳定恢复。",
    "potential_impact_on_lianlian_cn": "连连接入机器支付时需同时设计 pending/unknown 状态、幂等重试、预算上限与计量凭证、RPC 故障切换、跨 SDK 一致性和稳定错误语义。",
    "product_opportunity_cn": "建立 x402 综合 PoC，覆盖 open→meter→claim→reconcile→reclaim，全链路验证回执补偿、重复支付防护、多 RPC 路由和异常输入恢复。",
    "competitive_risk_cn": "参考实现正把生产运营经验固化进多语言 SDK；仅支持一次性付款或正常路径的方案会在按量计费、链上对账和故障恢复方面落后。",
    "who_should_care": [
      "支付技术",
      "资金结算",
      "开发者平台",
      "SRE",
      "质量保障"
    ],
    "recommended_action": "investigate",
    "recommended_owner": [
      "支付技术",
      "资金结算",
      "开发者平台"
    ],
    "questions_to_validate": [
      "settlement_pending 多久后可安全转为失败？",
      "预算上限与用户授权、服务端计量和争议如何绑定？",
      "RPC 故障切换能否保持交易幂等并避免 voucher/blockhash 过期？",
      "错误码能否跨 SDK 和协议版本保持一致？"
    ],
    "follow_up_triggers": [
      "正式版本同时包含相关 PR",
      "公开主网 upto 交易或商户案例",
      "Facilitator 披露 pending 与 RPC 提交 SLA",
      "增加退款、争议或跨币种结算语义"
    ],
    "related_sources": [
      "https://github.com/x402-foundation/x402/pull/3141",
      "https://github.com/x402-foundation/x402/pull/3183",
      "https://github.com/x402-foundation/x402/pull/3180"
    ],
    "scores": {
      "agentic_relevance": 5,
      "payment_relevance": 5,
      "infrastructure_value": 5,
      "strategic_value": 5,
      "source_quality": 5,
      "lianlian_relevance": 5,
      "cross_border_value": 3,
      "merchant_value": 4,
      "product_actionability": 5,
      "competitive_impact": 5
    },
    "related_event_ids": [
      "PR-3083",
      "PR-3141",
      "PR-3183",
      "PR-3180"
    ],
    "report_date": "2026-08-18",
    "first_seen_date": "2026-08-18",
    "last_seen_date": "2026-08-18",
    "run_dates": [
      "2026-08-18"
    ]
  },
  {
    "id": "stripe-20260817-multicurrency-settlement-instant-fx",
    "event_key": "stripe:multicurrency-settlement:instant-fx:2026-08-17",
    "event_id": "stripe-blog-reduce-fx-costs-2026-08-17",
    "demo": false,
    "title": "Stripe 扩展多币种结算并上线 15 币种即时换汇 API",
    "summary": "Stripe 宣布扩展多币种结算，并允许接受多币种付款的企业在 Dashboard、API 或移动端即时持有和转换资金。即时换汇现支持 15 种币种；到 2026 年底，37 个市场的企业将可按所在地区最多结算 18 种币种。部分自动转换和高级 API 工作流仍在路线图或 private preview。",
    "decision": "include",
    "confidence": 96,
    "relevance_level": "P2",
    "signal_type": "strategic_radar",
    "content_type": "official_release",
    "information_type": "product_capability",
    "evidence_level": "confirmed",
    "source": "Stripe Blog",
    "url": "https://stripe.com/blog/reduce-fx-costs-with-stripe",
    "canonical_url": "https://stripe.com/blog/reduce-fx-costs-with-stripe",
    "published_at": "2026-08-17T00:00:00Z",
    "event_date": "2026-08-17",
    "current_evidence": "Stripe 官方博客确认多币种结算扩展和 15 币种 24/7 即时换汇，并说明 Dashboard/API/移动端入口；高级 API 扩展和自动转换仍属于 2026 年路线图。",
    "payment_landing_evidence": "商户可将客户付款按币种结算并持有余额，再通过 Stripe API 即时换汇，用于跨境供应商付款、Payroll 或 Connect Payout，形成明确的收款—持有—换汇—支出链路。",
    "primary_tags": [
      "Stripe",
      "FX",
      "Multicurrency Settlement"
    ],
    "secondary_tags": [
      "API",
      "Cross-border",
      "Connect",
      "Treasury"
    ],
    "matched_reason": "虽非 Agent 专属能力，但直接改变跨境商户资金流、平台接口和结算关系。",
    "exclude_reason": "",
    "why_it_matters_cn": "Stripe 正把收款后的持币、换汇和平台分发收进同一账户/API，未来 Agent 或平台可把换汇作为自动化资金编排步骤调用。",
    "potential_impact_on_lianlian_cn": "与连连的多币种账户、FX、全球收款和 Payout 形成直接能力对标，尤其涉及香港、新加坡及平台商户。",
    "product_opportunity_cn": "对标 24/7 报价、即时换汇、自动转换、平台代分发和换汇收益配置，设计多币种资金编排 API。",
    "competitive_risk_cn": "Stripe 将收款、余额、FX、Connect 与全球 Payout 闭环，可能减少商户在支付后使用独立跨境资金服务的需求。",
    "who_should_care": [
      "跨境收付",
      "FX 产品",
      "平台产品",
      "战略"
    ],
    "recommended_action": "investigate",
    "recommended_owner": [
      "跨境产品",
      "资金产品",
      "战略"
    ],
    "questions_to_validate": [
      "15 种即时换汇币种、价格和地区限制是什么？",
      "高级 API private preview 对平台开放哪些权限？",
      "自动转换与 Treasury/Global Payouts 的资金隔离和合规如何处理？"
    ],
    "follow_up_triggers": [
      "自动转换正式上线",
      "高级换汇 API 扩大开放",
      "香港或新加坡新增结算币种与平台案例"
    ],
    "related_sources": [],
    "scores": {
      "agentic_relevance": 2,
      "payment_relevance": 5,
      "infrastructure_value": 5,
      "strategic_value": 5,
      "source_quality": 5,
      "lianlian_relevance": 5,
      "cross_border_value": 5,
      "merchant_value": 4,
      "product_actionability": 5,
      "competitive_impact": 5
    },
    "report_date": "2026-08-18",
    "first_seen_date": "2026-08-18",
    "last_seen_date": "2026-08-18",
    "run_dates": [
      "2026-08-18"
    ]
  },
  {
    "id": "binance-pay-dk-bank-bhutan-3700-merchants-20260817",
    "event_key": "binance-pay:dk-bank:bhutan-merchant-qr:2026-08-17",
    "event_id": "Binance-1739929830858690266",
    "demo": false,
    "title": "Binance Pay 接入不丹 DK Bank QR，覆盖逾 3,700 家商户",
    "summary": "Binance 官方宣布 Binance Pay 接入不丹 DK Bank QR 网络，国际访客可在全国逾 3,700 家商户使用加密资产扫码付款。该信号是具体商户受理落地，但未显示 AI Agent 授权或自动支付能力，因此仅列战略雷达。",
    "decision": "watchlist",
    "confidence": 93,
    "relevance_level": "P2",
    "signal_type": "strategic_radar",
    "content_type": "official_release",
    "information_type": "partnership_pilot",
    "evidence_level": "confirmed",
    "source": "Binance Blog",
    "url": "https://binance.com/en/blog/all/1739929830858690266",
    "canonical_url": "https://binance.com/en/blog/all/1739929830858690266",
    "published_at": "2026-08-17T14:13:41Z",
    "event_date": "2026-08-17",
    "current_evidence": "Binance 官方 API/博客条目状态为 LAUNCHED，明确 Binance Pay 已接入 DK Bank QR、覆盖 3,700+ 商户，并面向国际访客。未见 Agent 支付或自动化授权证据。",
    "payment_landing_evidence": "国际访客通过 Binance Pay 扫描 DK Bank QR 向不丹本地 3,700+ 商户付款，参与方、受理入口和商户收款场景明确。",
    "primary_tags": [
      "Binance Pay",
      "Merchant Acceptance",
      "Bhutan"
    ],
    "secondary_tags": [
      "QR Payment",
      "Cross-border Tourism",
      "DK Bank",
      "Crypto Payment"
    ],
    "matched_reason": "国家级本地银行 QR 与跨境加密付款入口连接，改变商户受理和游客资金流。",
    "exclude_reason": "",
    "why_it_matters_cn": "这不是泛加密新闻，而是跨境访客到本地商户的具体受理链路；它显示钱包可通过银行 QR 网络快速获得国家级线下覆盖。",
    "potential_impact_on_lianlian_cn": "连连应关注钱包、银行 QR 和旅游商户网络的互联模式，评估类似市场中的跨境扫码受理、清算和商户服务机会。",
    "product_opportunity_cn": "研究境外钱包到本地 QR 的受理转换、商户结算、汇率展示、退款和合规接口，并判断能否复用于亚洲旅游市场。",
    "competitive_risk_cn": "大型加密钱包通过本地银行二维码绕过传统卡受理，可能直接掌握跨境游客入口和商户支付关系。",
    "who_should_care": [
      "跨境收付",
      "本地支付",
      "商户产品",
      "合规"
    ],
    "recommended_action": "monitor",
    "recommended_owner": [
      "跨境产品",
      "生态合作",
      "合规"
    ],
    "questions_to_validate": [
      "商户最终以何种币种结算、由谁承担汇率风险？",
      "退款、争议、AML 和游客身份校验如何处理？",
      "是否支持稳定币及可编程/Agent 授权接口？"
    ],
    "follow_up_triggers": [
      "披露商户结算与法币转换流程",
      "扩展到更多本地银行 QR 网络",
      "开放 Agent 或商户 API"
    ],
    "related_sources": [],
    "scores": {
      "agentic_relevance": 1,
      "payment_relevance": 5,
      "infrastructure_value": 4,
      "strategic_value": 4,
      "source_quality": 5,
      "lianlian_relevance": 4,
      "cross_border_value": 5,
      "merchant_value": 5,
      "product_actionability": 4,
      "competitive_impact": 4
    },
    "report_date": "2026-08-18",
    "first_seen_date": "2026-08-18",
    "last_seen_date": "2026-08-18",
    "run_dates": [
      "2026-08-18"
    ]
  }
];
