window.DAILY_SIGNALS = [
  {
    "id": "x402-20260813-spend-controls-siwx-origin-batch",
    "event_key": "x402:engineering-batch:spend-controls-siwx-origin:2026-08-13",
    "event_id": "PR-3124+PR-3133+PR-3143+PR-3147",
    "demo": false,
    "title": "x402 同批落地客户端支出控制与 SIWX 来源绑定",
    "summary": "x402 Foundation 同日合并两组相互关联的客户端安全更新：TypeScript SDK 新增 spendControls，在签名前校验单笔金额、收款方和资产；SIWX challenge 新增 requestUrl 来源绑定，防止一个站点签发的挑战被转用到另一来源。配套文档 PR #3147 与 #3143 同步合并。",
    "decision": "include",
    "confidence": 98,
    "relevance_level": "P1",
    "signal_type": "core",
    "content_type": "technical_update",
    "information_type": "developer_ecosystem",
    "evidence_level": "confirmed",
    "source": "x402 Foundation GitHub",
    "url": "https://github.com/x402-foundation/x402/pull/3124",
    "canonical_url": "https://github.com/x402-foundation/x402/pull/3124",
    "published_at": "2026-08-13T15:37:18Z",
    "current_evidence": "GitHub 显示 PR #3124、#3133、#3143、#3147 均已于 2026-08-13 合并；功能 PR 与文档 PR 分别成对落地。",
    "primary_tags": [
      "x402",
      "Spend Control",
      "Delegated Authorization"
    ],
    "secondary_tags": [
      "SIWX",
      "Origin Binding",
      "Client Safety",
      "TypeScript SDK"
    ],
    "why_it_matters_cn": "Agent 自动签名付款时，支付协议开始把预算、收款方、资产和请求来源变成客户端可执行策略，而不是只依赖服务端声明。",
    "potential_impact_on_lianlian_cn": "连连若提供 Agent 钱包、Facilitator 或付款 API，需要把支出策略和来源绑定纳入授权层，避免 Agent 被诱导向错误收款方、错误资产或跨站 challenge 付款。",
    "product_opportunity_cn": "设计 Agent Payment Policy API，至少覆盖单笔/累计额度、商户与资产白名单、请求来源绑定、策略版本、拒绝原因和审计日志。",
    "competitive_risk_cn": "x402 SDK 若把关键授权控制直接做成默认客户端能力，PSP 仅提供结算接口将难以控制 Agent 支付策略入口。",
    "recommended_action": "investigate",
    "questions_to_validate": [
      "spendControls 当前是否覆盖累计周期额度、币种换算和并发请求？",
      "requestUrl 的规范化、重定向和代理场景如何处理？",
      "策略拒绝事件能否进入商户风控和争议审计链路？"
    ],
    "follow_up_triggers": [
      "spendControls 扩展到累计预算或服务端 policy token",
      "SIWX 来源绑定进入正式版本与其他语言 SDK",
      "出现生产 Facilitator 或商户采用案例"
    ],
    "related_sources": [
      "https://github.com/x402-foundation/x402/pull/3133",
      "https://github.com/x402-foundation/x402/pull/3143",
      "https://github.com/x402-foundation/x402/pull/3147",
      "https://github.com/x402-foundation/x402/commit/4f587236e99928d05677ab63a0bafe6120dc1111",
      "https://github.com/x402-foundation/x402/commit/c2612d31e7d93c035acaff8bc72575f4716ba691"
    ],
    "scores": {
      "agentic_relevance": 5,
      "payment_relevance": 5,
      "infrastructure_value": 5,
      "strategic_value": 4,
      "source_quality": 5,
      "lianlian_relevance": 5,
      "cross_border_value": 3,
      "merchant_value": 4,
      "product_actionability": 5,
      "competitive_impact": 4
    },
    "report_date": "2026-08-14",
    "event_date": "2026-08-13",
    "first_seen_date": "2026-08-14",
    "last_seen_date": "2026-08-14",
    "run_dates": [
      "2026-08-14"
    ]
  },
  {
    "id": "ucp-20260813-merchant-context-sale-basis-batch",
    "event_key": "ucp:engineering-batch:merchant-context-sale-basis:2026-08-13",
    "event_id": "PR-642+PR-653+PR-718+PR-720",
    "demo": false,
    "title": "UCP 同批补齐位置上下文、计量销售语义与分账文档入口",
    "summary": "Universal Commerce Protocol 在本窗口合并四项相关更新：PR #653 定义数量的 sale-basis steps；PR #642 支持平台发起请求携带位置上下文；PR #720 将 Split Payments 与术语表纳入 llms.txt；PR #718 增加住宿技术委员会公告。它们共同增强 Agent 发起商业请求时的商品计量、位置、分账发现与垂直场景表达。",
    "decision": "include",
    "confidence": 94,
    "relevance_level": "P1",
    "signal_type": "core",
    "content_type": "technical_update",
    "information_type": "protocol_standard",
    "evidence_level": "confirmed",
    "source": "Universal Commerce Protocol GitHub",
    "url": "https://github.com/Universal-Commerce-Protocol/ucp/pull/653",
    "canonical_url": "https://github.com/Universal-Commerce-Protocol/ucp/pull/653",
    "published_at": "2026-08-12T19:42:26Z",
    "current_evidence": "UCP main 分支在窗口内包含 PR #653、#642、#718、#720 对应提交；各事件 ID 单独保留并在同主题工程卡中关联。",
    "primary_tags": [
      "UCP",
      "Agent Commerce",
      "Merchant Checkout"
    ],
    "secondary_tags": [
      "Sale Basis",
      "Location Context",
      "Split Payments",
      "Lodging"
    ],
    "why_it_matters_cn": "Agent Checkout 不只需要支付动作，还要准确表达按件、按量或分步销售、门店/履约位置以及多方分账；这些字段决定协议能否进入复杂商户场景。",
    "potential_impact_on_lianlian_cn": "连连的商户商品、订单、分账与收单接口未来可能需要映射 UCP 上下文，尤其是平台型商户、住宿和多方履约场景。",
    "product_opportunity_cn": "建立 UCP 到连连订单/收单/分账模型的字段映射 PoC，验证数量语义、税费、位置、子商户、分账和退款的一致性。",
    "competitive_risk_cn": "若 UCP 平台先定义商品与分账语义，支付机构可能被压缩为后置执行通道，失去 Agent 商业入口和商户数据关系。",
    "recommended_action": "investigate",
    "questions_to_validate": [
      "sale-basis steps 如何映射部分履约、退款和争议？",
      "location context 是否影响税、币种、收单实体与本地支付方式？",
      "Split Payments 规范是否定义资金持有、责任和子商户合规边界？"
    ],
    "follow_up_triggers": [
      "UCP 发布稳定版本或主流 AI 平台采用",
      "Split Payments 从文档索引进入可执行 API",
      "住宿或平台商户公开生产接入"
    ],
    "related_sources": [
      "https://github.com/Universal-Commerce-Protocol/ucp/pull/642",
      "https://github.com/Universal-Commerce-Protocol/ucp/pull/718",
      "https://github.com/Universal-Commerce-Protocol/ucp/pull/720",
      "https://github.com/Universal-Commerce-Protocol/ucp/commit/5a5d9e11174ea656df5f2e43d07b90c01469d08c",
      "https://github.com/Universal-Commerce-Protocol/ucp/commit/72914f42b2cb9a6de4ad1f8908ffa9323628dda5"
    ],
    "scores": {
      "agentic_relevance": 5,
      "payment_relevance": 4,
      "infrastructure_value": 5,
      "strategic_value": 4,
      "source_quality": 5,
      "lianlian_relevance": 5,
      "cross_border_value": 3,
      "merchant_value": 5,
      "product_actionability": 5,
      "competitive_impact": 4
    },
    "report_date": "2026-08-14",
    "event_date": "2026-08-12",
    "first_seen_date": "2026-08-14",
    "last_seen_date": "2026-08-14",
    "run_dates": [
      "2026-08-14"
    ]
  },
  {
    "id": "2026-08-14-bc-card-coinbase-usdc-tourist-poc",
    "event_key": "bc-card:coinbase:usdc-tourist-poc-complete:2026-08-13",
    "demo": false,
    "title": "媒体称 BC Card 与 Coinbase 完成游客 USDC 商户支付 PoC",
    "summary": "移动支付网报道，BC Card、Coinbase 与 Wavebridge 完成为期三个月的稳定币支付 PoC：境外游客使用 Base 钱包中的 USDC，在韩国 BC Card 二维码商户付款。当前未取得三方本次完成公告，因此不把规模化上线视为已确认。",
    "decision": "watchlist",
    "confidence": 78,
    "relevance_level": "P2",
    "signal_type": "strategic_radar",
    "content_type": "media_report",
    "information_type": "partnership_pilot",
    "evidence_level": "reported",
    "source": "移动支付网",
    "url": "https://mpaypass.com.cn/news/202608/13103640.html",
    "canonical_url": "https://mpaypass.com.cn/news/202608/13103640.html",
    "published_at": "2026-08-13T02:37:00Z",
    "current_evidence": "移动支付网页面具名 BC Card、Coinbase、Wavebridge，并描述游客、Base 钱包、USDC 与 BC Card 二维码商户流程；本轮无一手完成公告。",
    "primary_tags": [
      "Stablecoin Payment",
      "Cross-border Checkout"
    ],
    "secondary_tags": [
      "BC Card",
      "Coinbase",
      "USDC",
      "Tourism"
    ],
    "why_it_matters_cn": "该 PoC 把境外钱包中的稳定币直接接入本地二维码商户受理网络，验证钱包、收单网络与本地商户关系的组合方式。",
    "potential_impact_on_lianlian_cn": "这与连连跨境游客支付、商户收单、稳定币换汇和本地结算相邻，可作为亚洲市场稳定币消费支付的架构样本。",
    "product_opportunity_cn": "评估境外稳定币钱包到本地二维码商户的报价、KYC/AML、制裁筛查、退款、FX、商户结算与对账方案。",
    "competitive_risk_cn": "卡网络与大型钱包若先打通稳定币到本地商户二维码的入口，跨境 PSP 可能失去游客支付的换汇与路由环节。",
    "recommended_action": "monitor",
    "questions_to_validate": [
      "PoC 的真实交易量、商户范围和结算币种是什么？",
      "Coinbase、BC Card 与 Wavebridge 分别承担何种合规和资金角色？",
      "是否计划从试验转为正式商用？"
    ],
    "follow_up_triggers": [
      "BC Card 或 Coinbase 发布一手结果",
      "开放真实商户或游客规模化使用",
      "披露结算、退款和合规架构"
    ],
    "related_sources": [],
    "scores": {
      "agentic_relevance": 1,
      "payment_relevance": 5,
      "infrastructure_value": 4,
      "strategic_value": 4,
      "source_quality": 3,
      "lianlian_relevance": 5,
      "cross_border_value": 5,
      "merchant_value": 5,
      "product_actionability": 4,
      "competitive_impact": 4
    },
    "report_date": "2026-08-14",
    "event_date": "2026-08-13",
    "first_seen_date": "2026-08-14",
    "last_seen_date": "2026-08-14",
    "run_dates": [
      "2026-08-14"
    ]
  },
  {
    "id": "2026-08-14-thunes-eurc-crossborder-integration",
    "event_key": "thunes:eurc:crossborder-network-integration:2026-08-13",
    "demo": false,
    "title": "媒体称 Thunes 将 EURC 接入跨境支付网络",
    "summary": "移动支付网报道，Thunes 将 Circle 的欧元稳定币 EURC 接入其跨境支付网络。当前仅取得媒体发现材料，未在本轮取得 Thunes 或 Circle 对本次集成的一手公告，具体覆盖市场、客户与结算流程待核验。",
    "decision": "watchlist",
    "confidence": 72,
    "relevance_level": "P2",
    "signal_type": "strategic_radar",
    "content_type": "media_report",
    "information_type": "product_capability",
    "evidence_level": "reported",
    "source": "移动支付网",
    "url": "https://mpaypass.com.cn/news/202608/13170259.html",
    "canonical_url": "https://mpaypass.com.cn/news/202608/13170259.html",
    "published_at": "2026-08-13T09:01:00Z",
    "current_evidence": "采集到移动支付网具名 Thunes 与 EURC 的集成报道；一手产品页面和可用范围尚未核验。",
    "primary_tags": [
      "EURC",
      "Cross-border Settlement"
    ],
    "secondary_tags": [
      "Thunes",
      "Stablecoin",
      "FX",
      "Payout"
    ],
    "why_it_matters_cn": "欧元稳定币进入全球支付网络，可能让可编程系统和未来 Agent 直接调用欧元计价的跨境收付与结算轨道。",
    "potential_impact_on_lianlian_cn": "Thunes 与连连在全球收付和网络覆盖上相邻；EURC 集成可能改变欧洲跨境结算成本、时效和合作网络选择。",
    "product_opportunity_cn": "核验 EURC 的入金、出金、流动性、FX、企业准入与目的地覆盖，评估欧元稳定币结算和 Agent API 的组合路径。",
    "competitive_risk_cn": "全球支付网络若把稳定币结算直接产品化，可能以更短资金链争夺平台和自动化支付客户。",
    "recommended_action": "investigate",
    "questions_to_validate": [
      "Thunes 官方产品范围与上线日期是什么？",
      "EURC 在哪些国家、账户与付款类型可用？",
      "最终商户/收款人收到 EURC 还是法币？"
    ],
    "follow_up_triggers": [
      "Thunes 或 Circle 发布官方公告/API",
      "披露首批客户和交易规模",
      "支持自动化或 Agent 发起的跨境付款"
    ],
    "related_sources": [],
    "scores": {
      "agentic_relevance": 2,
      "payment_relevance": 5,
      "infrastructure_value": 5,
      "strategic_value": 4,
      "source_quality": 3,
      "lianlian_relevance": 5,
      "cross_border_value": 5,
      "merchant_value": 3,
      "product_actionability": 4,
      "competitive_impact": 4
    },
    "report_date": "2026-08-14",
    "event_date": "2026-08-13",
    "first_seen_date": "2026-08-14",
    "last_seen_date": "2026-08-14",
    "run_dates": [
      "2026-08-14"
    ]
  },
  {
    "id": "2026-08-14-x402-volume-decline-93pct-report",
    "event_key": "x402:reported-volume-decline:2026-08-13",
    "demo": false,
    "title": "报告称 x402 年初至今日均支付量下降 93%",
    "summary": "移动支付网援引 Real Vision 分析师 Jamie Coutts 的报告称，x402 年初至今日均支付量下降 93%，并将 Cloudflare 变现网关视为潜在后续催化。未取得原始报告的数据口径、起止日期和链上查询，因此该数字标记为 reported。",
    "decision": "watchlist",
    "confidence": 70,
    "relevance_level": "P2",
    "signal_type": "research",
    "content_type": "media_report",
    "information_type": "research_insight",
    "evidence_level": "reported",
    "source": "移动支付网",
    "url": "https://mpaypass.com.cn/news/202608/13142926.html",
    "canonical_url": "https://mpaypass.com.cn/news/202608/13142926.html",
    "published_at": "2026-08-13T06:30:00Z",
    "current_evidence": "媒体页面明确给出 93% 数字、归因于 Jamie Coutts/Real Vision，并标注文章由 AI 辅助翻译编辑；原始报告未取得。",
    "primary_tags": [
      "x402",
      "Adoption"
    ],
    "secondary_tags": [
      "Payment Volume",
      "Cloudflare",
      "API Monetization"
    ],
    "why_it_matters_cn": "协议工程更新密集并不等于真实付款采用；交易量下滑提示产品判断必须同时跟踪活跃商户、付费 API 和重复支付行为。",
    "potential_impact_on_lianlian_cn": "连连不应只按协议热度投入，应把真实交易需求、商户留存和稳定币资金效率设为 PoC 继续条件。",
    "product_opportunity_cn": "建立 x402 adoption 仪表盘，按网络、Facilitator、商户、API 类别、金额与复购拆分交易，而不是只看总笔数。",
    "competitive_risk_cn": "若市场采用不足，过早重投入会形成机会成本；若 Cloudflare 等入口带来反弹，未提前建立监测又可能错过窗口。",
    "recommended_action": "monitor",
    "questions_to_validate": [
      "93% 的基期、终点、网络和交易口径是什么？",
      "是否剔除测试、刷量和单一高频服务？",
      "Cloudflare 接入后活跃商户和重复付款是否改善？"
    ],
    "follow_up_triggers": [
      "取得原始报告或可复算链上数据",
      "月活商户和重复付款连续增长",
      "大型 API/内容平台披露生产交易量"
    ],
    "related_sources": [],
    "scores": {
      "agentic_relevance": 5,
      "payment_relevance": 5,
      "infrastructure_value": 3,
      "strategic_value": 4,
      "source_quality": 2,
      "lianlian_relevance": 4,
      "cross_border_value": 2,
      "merchant_value": 3,
      "product_actionability": 4,
      "competitive_impact": 3
    },
    "report_date": "2026-08-14",
    "event_date": "2026-08-13",
    "first_seen_date": "2026-08-14",
    "last_seen_date": "2026-08-14",
    "run_dates": [
      "2026-08-14"
    ]
  },
  {
    "id": "2026-08-14-mica-stablecoin-self-custody-restriction-report",
    "event_key": "eu:mica:stablecoin-issuer-self-custody-restriction:2026-08-14",
    "demo": false,
    "title": "媒体称 14 家欧洲稳定币发行商受 MiCA 自有代币托管限制",
    "summary": "移动支付网报道，欧洲 MiCA 规则适用下有 14 家稳定币发行商被禁止托管其自有代币。当前未取得对应监管决定或发行商清单的一手文件，禁止范围、法律依据与对赎回流程的影响仍待核验。",
    "decision": "watchlist",
    "confidence": 65,
    "relevance_level": "P2",
    "signal_type": "regulation",
    "content_type": "media_report",
    "information_type": "regulation_compliance",
    "evidence_level": "reported",
    "source": "移动支付网",
    "url": "https://mpaypass.com.cn/news/202608/14093434.html",
    "canonical_url": "https://mpaypass.com.cn/news/202608/14093434.html",
    "published_at": "2026-08-14T01:29:00Z",
    "current_evidence": "来源页标题与元数据指向 MiCA、自有代币托管和 14 家发行商；尚无监管原文或完整名单。",
    "primary_tags": [
      "MiCA",
      "Stablecoin Compliance"
    ],
    "secondary_tags": [
      "Custody",
      "Redemption",
      "European Union"
    ],
    "why_it_matters_cn": "发行、托管和赎回角色若被强制分离，会改变稳定币支付的资金控制、合作机构和运营成本，并影响自动化结算可用性。",
    "potential_impact_on_lianlian_cn": "连连若在欧洲接入稳定币收付，需要确认发行方、自托管限制、客户资产隔离和赎回链路是否要求独立持牌托管人。",
    "product_opportunity_cn": "建立欧洲稳定币角色矩阵，将发行、托管、兑换、商户结算与 Agent 授权分别映射到牌照和责任主体。",
    "competitive_risk_cn": "已具备欧盟托管与稳定币合作网络的 PSP 可能更快满足角色分离要求，抢占跨境商户。",
    "recommended_action": "investigate",
    "questions_to_validate": [
      "监管原文、主管机构和 14 家名单是什么？",
      "限制针对发行人自托管、客户托管还是储备资产托管？",
      "对铸造、赎回和商户结算的实际影响是什么？"
    ],
    "follow_up_triggers": [
      "取得欧盟或成员国监管文件",
      "相关发行商调整托管或赎回架构",
      "稳定币支付服务商披露 MiCA 合规方案"
    ],
    "related_sources": [],
    "scores": {
      "agentic_relevance": 1,
      "payment_relevance": 4,
      "infrastructure_value": 4,
      "strategic_value": 4,
      "source_quality": 2,
      "lianlian_relevance": 4,
      "cross_border_value": 4,
      "merchant_value": 2,
      "product_actionability": 4,
      "competitive_impact": 3
    },
    "report_date": "2026-08-14",
    "event_date": "2026-08-14",
    "first_seen_date": "2026-08-14",
    "last_seen_date": "2026-08-14",
    "run_dates": [
      "2026-08-14"
    ]
  }
];
