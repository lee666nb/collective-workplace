
Page({
    data: {
      imageList: [
        '/image/skindetect3.png',
        '/image/skindetect.png',
        '/image/images.jpg',
        '/image/skindetect2.png'
      ],
      searchQuery: '',
      selectedDisease: null,
      diseases: [
        {
          name: '湿疹',
          image: 'eczema.jpg',
          description: '湿疹是一种导致皮肤干燥、瘙痒的炎症性皮肤病。',
          treatments: [
            {
              type: '外用药物',
              details: '外用皮质类固醇可以缓解湿疹的症状。'
            },
            {
              type: '保湿剂',
              details: '保湿剂可以帮助保持皮肤水分。'
            }
          ]
        },
        {
          name: '银屑病（牛皮癣）',
          image: 'psoriasis.jpg',
          description: '银屑病是一种慢性炎症性皮肤病，常表现为皮肤上出现红色鳞屑斑块。',
          treatments: [
            {
              type: '外用药物',
              details: '外用维生素D类似物、皮质类固醇和煤焦油制剂可帮助缓解症状。'
            },
            {
              type: '口服药物',
              details: '系统性治疗包括免疫抑制剂如甲氨蝶呤。'
            },
            {
              type: '光疗',
              details: '紫外线B（UVB）疗法对治疗银屑病有效。'
            }
          ]
        },
        {
          name: '痤疮（粉刺）',
          image: 'acne.jpg',
          description: '痤疮是一种常见的皮肤问题，通常在青春期出现，表现为皮肤上的丘疹和粉刺。',
          treatments: [
            {
              type: '外用药物',
              details: '常用的外用药物包括过氧化苯甲酰和维A酸。'
            },
            {
              type: '口服药物',
              details: '对于严重的痤疮，可以使用抗生素或维A酸。'
            }
          ]
        },
        {
          name: '玫瑰痤疮',
          image: 'rosacea.jpg',
          description: '玫瑰痤疮是一种慢性面部皮肤病，表现为面部发红、丘疹和毛细血管扩张。',
          treatments: [
            {
              type: '外用药物',
              details: '外用甲硝唑或伊维菌素可以缓解症状。'
            },
            {
              type: '口服药物',
              details: '口服四环素类抗生素如米诺环素。'
            }
          ]
        },
        {
          name: '荨麻疹',
          image: 'urticaria.jpg',
          description: '荨麻疹是一种皮肤过敏反应，表现为突然出现的红色瘙痒风团。',
          treatments: [
            {
              type: '抗组胺药',
              details: '抗组胺药是治疗荨麻疹的主要药物。'
            },
            {
              type: '口服类固醇',
              details: '对于严重的荨麻疹，可以使用口服类固醇。'
            }
          ]
        },
        {
          name: '带状疱疹',
          image: 'shingles.jpg',
          description: '带状疱疹由水痘-带状疱疹病毒引起，表现为沿神经分布的红色疱疹和剧烈疼痛。',
          treatments: [
            {
              type: '抗病毒药物',
              details: '抗病毒药物如阿昔洛韦可缩短病程。'
            },
            {
              type: '止痛药',
              details: '止痛药如非甾体抗炎药（NSAIDs）可缓解疼痛。'
            }
          ]
        },
        {
          name: '足癣',
          image: 'athletes_foot.jpg',
          description: '足癣是一种常见的真菌感染，通常影响足部皮肤，特别是趾间皮肤。',
          treatments: [
            {
              type: '外用抗真菌药物',
              details: '外用抗真菌药物如克霉唑或特比萘芬。'
            },
            {
              type: '口服抗真菌药物',
              details: '对于严重的感染，可以使用口服抗真菌药物如伊曲康唑。'
            }
          ]
        },
        {
          name: '白癜风',
          image: 'vitiligo.jpg',
          description: '白癜风是一种导致皮肤色素丧失的疾病，表现为皮肤出现白色斑块。',
          treatments: [
            {
              type: '局部免疫调节剂',
              details: '局部免疫调节剂如他克莫司可以帮助恢复色素。'
            },
            {
              type: '光疗',
              details: '窄波UVB光疗可以刺激色素细胞恢复。'
            }
          ]
        },
        {
          name: '冻疮',
          image: 'chilblains.jpg',
          description: '冻疮是一种由于暴露在寒冷环境中导致的小血管炎症，表现为红肿、瘙痒和疼痛。',
          treatments: [
            {
              type: '保暖',
              details: '保暖和避免寒冷暴露是预防冻疮的关键。'
            },
            {
              type: '外用药物',
              details: '局部应用肾上腺素霜可缓解症状。'
            }
          ]
        },
        {
          name: '汗疱疹',
          image: 'dyshidrotic_eczema.jpg',
          description: '汗疱疹是一种导致手掌和足底出现小水疱的皮肤病，通常伴有瘙痒。',
          treatments: [
            {
              type: '外用药物',
              details: '外用强效皮质类固醇可减轻炎症。'
            },
            {
              type: '光疗',
              details: '紫外线治疗可能对顽固性病例有效。'
            }
          ]
        },
        {
          name: '黄褐斑',
          image: 'melasma.jpg',
          description: '黄褐斑是一种面部色素沉着过度的皮肤病，通常与激素变化有关。',
          treatments: [
            {
              type: '外用美白剂',
              details: '外用氢醌或其他美白剂可以减少色素沉着。'
            },
            {
              type: '化学剥脱',
              details: '化学剥脱可以帮助淡化色斑。'
            }
          ]
        },
        {
          name: '扁平疣',
          image: 'flat_warts.jpg',
          description: '扁平疣是由人乳头瘤病毒（HPV）引起的小型平坦疣，通常出现在面部和手部。',
          treatments: [
            {
              type: '外用药物',
              details: '外用维A酸或水杨酸可以去除疣。'
            },
            {
              type: '冷冻治疗',
              details: '冷冻治疗（液氮）可以有效去除疣。'
            }
          ]
        },
        {
          name: '脂溢性皮炎',
          image: 'seborrheic_dermatitis.jpg',
          description: '脂溢性皮炎是一种常见的皮肤病，表现为头皮和面部的油腻、鳞屑性红斑。',
          treatments: [
            {
              type: '外用抗真菌药物',
              details: '外用酮康唑或环吡酮醇可以帮助控制症状。'
            },
            {
              type: '外用皮质类固醇',
              details: '短期使用低强度的外用皮质类固醇可以减少炎症。'
            }
          ]
        },
        {
          name: '接触性皮炎',
          image: 'contact_dermatitis.jpg',
          description: '接触性皮炎是由于皮肤接触过敏原或刺激物引起的皮肤炎症，表现为红肿、瘙痒和水疱。',
          treatments: [
            {
              type: '外用药物',
              details: '外用皮质类固醇是主要治疗方法，可以减轻炎症。'
            },
            {
              type: '避免刺激物',
              details: '避免接触已知的过敏原或刺激物是预防的关键。'
            }
          ]
        },
        {
          name: '天疱疮',
          image: 'pemphigus.jpg',
          description: '天疱疮是一种自身免疫性疾病，导致皮肤和粘膜出现疼痛性水疱。',
          treatments: [
            {
              type: '口服类固醇',
              details: '高剂量的口服类固醇如泼尼松是治疗的主要方法。'
            },
            {
              type: '免疫抑制剂',
              details: '免疫抑制剂如硫唑嘌呤可以帮助控制病情。'
            }
          ]
        },
        {
          name: '斑秃',
          image: 'alopecia_areata.jpg',
          description: '斑秃是一种自身免疫性疾病，导致局部或全身性脱发。',
          treatments: [
            {
              type: '外用药物',
              details: '外用米诺地尔可以促进毛发再生。'
            },
            {
              type: '局部注射类固醇',
              details: '局部注射类固醇可以帮助控制脱发。'
            }
          ]
        },
        {
          name: '红斑狼疮',
          image: 'lupus.jpg',
          description: '红斑狼疮是一种全身性自身免疫性疾病，常影响皮肤、关节和内脏器官。',
          treatments: [
            {
              type: '免疫抑制剂',
              details: '免疫抑制剂如环磷酰胺可以控制疾病活动。'
            },
            {
              type: '类固醇',
              details: '类固醇如泼尼松可以减少炎症和免疫反应。'
            }
          ]
        },
        {
          name: '脓疱型牛皮癣',
          image: 'pustular_psoriasis.jpg',
          description: '脓疱型牛皮癣是一种罕见且严重的牛皮癣类型，表现为皮肤上出现脓疱。',
          treatments: [
            {
              type: '口服药物',
              details: '系统性治疗如维A酸类药物和免疫抑制剂是主要治疗手段。'
            },
            {
              type: '光疗',
              details: '光疗可以帮助减少皮肤损伤。'
            }
          ]
        },
        {
          name: '鱼鳞病',
          image: 'ichthyosis.jpg',
          description: '鱼鳞病是一种导致皮肤干燥、脱屑的遗传性疾病，皮肤看起来像鱼鳞。',
          treatments: [
            {
              type: '保湿剂',
              details: '强效保湿剂可以帮助减少皮肤干燥。'
            },
            {
              type: '角质溶解剂',
              details: '使用含有尿素或乳酸的角质溶解剂可以帮助去除厚重鳞屑。'
            }
          ]
        },
        {
          name: '毛囊炎',
          image: 'folliculitis.jpg',
          description: '毛囊炎是毛囊的炎症，通常由细菌感染引起，表现为红色丘疹和脓疱。',
          treatments: [
            {
              type: '外用抗菌药物',
              details: '外用抗菌药物如莫匹罗星可治疗轻度感染。'
            },
            {
              type: '口服抗生素',
              details: '对于严重感染，可能需要口服抗生素如克林霉素。'
            }
          ]
        },
        {
          name: '黄疸',
          image: 'jaundice.jpg',
          description: '黄疸是由于体内胆红素水平升高导致皮肤和眼白变黄的一种表现。',
          treatments: [
            {
              type: '光疗',
              details: '光疗可以帮助新生儿黄疸患者降低胆红素水平。'
            },
            {
              type: '治疗基础病因',
              details: '针对成人黄疸，治疗的重点是找出并处理黄疸的基础病因。'
            }
          ]
        },
        {
          name: '皮脂腺囊肿',
          image: 'sebaceous_cyst.jpg',
          description: '皮脂腺囊肿是皮肤下的一个小囊肿，通常无痛，但可能发炎或感染。',
          treatments: [
            {
              type: '手术切除',
              details: '对于较大的囊肿或反复感染的囊肿，可以进行手术切除。'
            },
            {
              type: '抗生素',
              details: '如果囊肿感染，可以使用抗生素治疗。'
            }
          ]
        },
        {
          name: '梅毒',
          image: 'syphilis.jpg',
          description: '梅毒是一种由梅毒螺旋体引起的性传播疾病，可能影响多个系统，包括皮肤。',
          treatments: [
            {
              type: '抗生素',
              details: '青霉素是治疗梅毒的首选药物。'
            },
            {
              type: '定期随访',
              details: '定期随访和血清学检查对于确认治疗效果至关重要。'
            }
          ]
        }
      ]
    },
  
    // 搜索框输入事件
    onSearchInput(e) {
      this.setData({
        searchQuery: e.detail.value
      });
    },
  
    // 搜索事件
    onSearch() {
      const query = this.data.searchQuery.trim().toLowerCase();
      const disease = this.data.diseases.find(d => d.name.toLowerCase().includes(query));
  
      if (disease) {
        this.setData({
          selectedDisease: disease
        });
      } else {
        this.setData({
          selectedDisease: null
        });
      }
    }
  });
  